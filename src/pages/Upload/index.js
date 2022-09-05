import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import InputCreate from '~/components/InputCreate';
import { uploatMovie } from '~/api/axios/moviesApi';

export default function Upload() {
    const [openMovieSeries, setOpenMovieSeries] = useState(false);

    const userId = useSelector((state) => state.auth.Userlogin?.currentUser._id);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            category: 'phq',
            mainContent: '',
            linkMovies: [],
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, 'Phải đủ 5').max(50, 'nhỏ hơn 50').required('bắt buộc'),
            mainContent: Yup.string().min(5, 'Phải đủ 50').max(1000, 'nhỏ hơn 1000').required('bắt buộc'),
            linkMovies: Yup.array().of(Yup.string().min(5, 'Phải đủ 50').required('bắt buộc')).required('bắt buộc'),
        }),
        onSubmit: (values) => {
            const { name, category, mainContent, linkMovies } = values;
            const arrLinks = linkMovies.map((linkMovie) => linkMovie.trim());
            uploatMovie(dispatch, navigate, { name, category, mainContent, arrLinks, userId });
        },
    });
    const handleMovie = () => {
        setOpenMovieSeries(!openMovieSeries);
        formik.values.linkMovies = [''];
    };

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
                    <div className="flex justify-between">
                        <div className="flex-center">
                            <label htmlFor="sort-movie" className="block text-xl font-semibold text-yellow mr-4">
                                Phim ngắn
                            </label>
                            <input
                                type="radio"
                                name="radio"
                                id="sort-movie"
                                className="w-4 h-4"
                                value="1"
                                checked={!openMovieSeries}
                                onChange={handleMovie}
                            />
                        </div>
                        <div className="flex-center">
                            <label htmlFor="long-movie" className="block text-xl font-semibold text-yellow mr-4">
                                Phim dài tập
                            </label>
                            <input
                                type="radio"
                                name="radio"
                                id="long-movie"
                                className="w-4 h-4"
                                checked={openMovieSeries}
                                onChange={handleMovie}
                            />
                        </div>
                    </div>

                    {!openMovieSeries ? (
                        <>
                            <input
                                type="text"
                                name="linkMovies[0]"
                                value={formik.values.linkMovies[0]}
                                className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                                onChange={formik.handleChange}
                            />
                            {formik.errors.linkMovies && (
                                <span className="block text-red-500">{formik.errors.linkMovies}</span>
                            )}
                        </>
                    ) : (
                        <InputCreate
                            name="linkMovies"
                            value={formik.values.linkMovies}
                            onChange={formik.handleChange}
                            errors={formik.errors.linkMovies}
                        />
                    )}
                </div>

                <div className="mt-4"></div>

                <button className="mt-4 text-white w-[160px] h-10 bg-yellow rounded-3xl" type="submit">
                    Uploat phim
                </button>
            </form>
        </div>
    );
}
