import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup';
import { getMovieBySlug, upDateMovie } from '~/api/axios/moviesApi';


export default function Update() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const movieUpdate = useSelector((state) => state.movies.getMovieBySlug?.currentMovies);
    const linkMovieUpdates = movieUpdate?.chapMp4s.map((link) => link.mp4Link);

    useEffect(() => {
        getMovieBySlug(params.slug, dispatch);
    }, [dispatch, params]);

    const formik = {
        initialValues: {
            name: movieUpdate?.name,
            category: movieUpdate?.genre,
            mainContent: movieUpdate?.content,
            linkMovies: linkMovieUpdates,
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, 'Phải đủ 5').max(50, 'nhỏ hơn 50').required('bắt buộc'),
            mainContent: Yup.string().min(5, 'Phải đủ 50').max(1000, 'nhỏ hơn 1000').required('bắt buộc'),
            linkMovies: Yup.array().of(Yup.string().min(5, 'Phải đủ 50').required('bắt buộc')).required('bắt buộc'),
        }),
        onSubmit: (values) => {
            const { name, category, mainContent, linkMovies } = values;
            const arrLinks = linkMovies.map((linkMovie) => linkMovie.trim());
            const resUpdate = {
                id: movieUpdate._id,
                oldName: movieUpdate?.name,
                name,
                category,
                mainContent,
                arrLinks,
            };

            upDateMovie(navigate, params.slug, resUpdate);
        },
    };

    return (
        <div className="flex flex-col items-center">
            <h4 className="text-2xl text-white">Uploat phim</h4>

            <Formik enableReinitialize={true} {...formik}>
                {({ values }) => {
                    return (
                        <Form className="flex-center flex-col">
                            <div className="form-item flex flex-col space-y-2">
                                <label htmlFor="name" className="text-xl font-semibold text-yellow">
                                    Tên phim
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Mời nhập tên phim"
                                    className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                                />
                                <span className="text-red-500">
                                    <ErrorMessage name="name" />
                                </span>
                            </div>

                            <div className="form-item mt-4 flex flex-col space-y-2">
                                <label htmlFor="" className="block text-xl font-semibold text-yellow">
                                    Thể loại
                                </label>
                                <Field as="select" name="category" className="w-[500px] h-10 rounded-2xl pl-2">
                                    <option value="pl">Phim lẻ</option>
                                    <option value="phq">Phim hàn quốc</option>
                                    <option value="anime">Phim Anime</option>
                                </Field>
                            </div>

                            <div className="form-item mt-4 flex flex-col space-y-2">
                                <label htmlFor="" className="block text-xl font-semibold text-yellow">
                                    Nội dung chính của phim
                                </label>
                                <Field
                                    as="textarea"
                                    rows="9"
                                    cols="70"
                                    name="mainContent"
                                    className="mt-3 w-[500px] pl-4 rounded-2xl"
                                />
                                <span className="text-red-500">
                                    <ErrorMessage className="text-red-500" name="mainContent" />
                                </span>
                            </div>

                            <div className="form-item flex-center flex-col space-y-2">
                                <label className="text-xl font-semibold text-yellow">Tập phim</label>
                                <FieldArray
                                    name="linkMovies"
                                    render={(arrayHelpers) => {
                                        return (
                                            <div>
                                                {values.linkMovies && values.linkMovies.length > 0 ? (
                                                    values.linkMovies.map((linkMovie, index) => (
                                                        <div key={index} className="form-item flex-center space-x-4">
                                                            <label className="text-xl font-semibold text-yellow">
                                                                Tập {index + 1}
                                                            </label>
                                                            <Field
                                                                name={`linkMovies.${index}`}
                                                                className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                                                            />

                                                            <button
                                                                type="button"
                                                                className=" text-white"
                                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                            >
                                                                -
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="ml-4  text-white"
                                                                onClick={() => arrayHelpers.insert(index + 1, '')} // insert an empty string at a position
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="ml-4 w-36 h-10 bg-yellow rounded-3xl text-white"
                                                        onClick={() => arrayHelpers.push('')}
                                                    >
                                                        {/* show this when user has removed all friends from the list */}
                                                        Add a Chapter
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                            <button className="mt-4 text-white w-[160px] h-10 bg-yellow rounded-3xl" type="submit">
                                Uploat phim
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
