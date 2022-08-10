import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { uploatMovie, getMovieBySlug } from '~/api/axios/moviesApi';

import InputCreate from '~/components/InputCreate';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

export default function Update() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const movieUpdate = useSelector((state) => state.movies.getMovieBySlug.currentMovies);
    const linkMovieUpdates = movieUpdate.chapMp4s.map((link) => link.mp4Link);

    useEffect(() => {
        getMovieBySlug(params.slug, dispatch);
    }, []);

    const formik = useFormik({
        initialValues: {
            name: movieUpdate.name,
            category: movieUpdate.genre,
            mainContent: movieUpdate.content,
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
            console.log(arrLinks);
            // uploatMovie(navigate, { name, category, mainContent, arrLinks });
        },
    });

    return (
        <div className="flex flex-col items-center">
            <h4 className="text-2xl text-white">Đăng phim</h4>

            <form action="" className="flex-center flex-col" onSubmit={formik.handleSubmit}>
                <div className="form-item flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xl font-semibold text-yellow">
                        Tên phim
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <span className="text-red-500">{formik.errors.name}</span>}
                </div>

                <div className="mt-4 form-item">
                    <label htmlFor="" className="block text-xl font-semibold text-yellow">
                        Thể loại
                    </label>

                    <select
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        className="w-[500px] h-10 rounded-2xl pl-2"
                    >
                        <option value="pl">Phim lẻ</option>
                        <option value="phq">Phim hàn quốc</option>
                        <option value="anime">Phim Anime</option>
                    </select>
                </div>

                <div className="mt-4 form-item">
                    <label htmlFor="" className="block text-xl font-semibold text-yellow">
                        Nội dung chính của phim
                    </label>
                    <textarea
                        rows="9"
                        cols="70"
                        name="mainContent"
                        value={formik.values.mainContent}
                        className="mt-3 w-[500px] pl-4 rounded-2xl"
                        onChange={formik.handleChange}
                    />
                    {formik.errors.mainContent && (
                        <span className="block text-red-500">{formik.errors.mainContent}</span>
                    )}
                </div>

                <div className="mt-4 form-item w-full">
                    {formik.values.linkMovies.map((linkMovie, index) => (
                        <div className="form-item flex flex-col space-y-2" key={linkMovie + index}>
                            <label htmlFor="name" className="text-xl font-semibold text-yellow">
                                Tập {index + 1}
                            </label>
                            <input
                                type="text"
                                name={`linkMovies[${index}]`}
                                value={linkMovie}
                                className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.linkMovies && formik.errors.linkMovies[index] && (
                                <span className="text-red-500">{formik.errors.linkMovies[index]}</span>
                            )}
                        </div>
                    ))}
                    <div className="mt-4 w-full flex-center">
                        <button className="w-20 h-10 bg-yellow rounded-3xl text-white">Add</button>

                        <button className="ml-4 w-20 h-10 bg-yellow rounded-3xl text-white">Remove</button>
                    </div>
                </div>

                <button className="mt-4 text-white w-[160px] h-10 bg-yellow rounded-3xl" type="submit">
                    Uploat phim
                </button>
            </form>
        </div>
    );
}
