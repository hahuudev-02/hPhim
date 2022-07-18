import React, { useState, useEffect } from 'react';
import { useFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { uploatMovie } from '~/api/axios/moviesApi';

import InputCreate from '~/components/InputCreate';
import { useNavigate } from 'react-router';

export default function Upload() {
    const [openMovieSeries, setOpenMovieSeries] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            mainContent: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, 'Phải đủ 5').max(25, 'nhỏ hơn 25').required('bắt buộc'),
        }),
        onSubmit: (values) => {
            uploatMovie(navigate, { ...values });
        },
    });

    useEffect(() => {}, []);

    return (
        <div className="flex flex-col items-center">
            <h4 className="text-2xl text-white">Đăng phim</h4>

            <form action="" className="" onSubmit={formik.handleSubmit}>
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

                    <select name="category" onChange={formik.handleChange} className="w-[500px]">
                        <option value="Phim hàn quốc">Phim hàn quốc</option>
                        <option value="Phim Anime">Phim hoạt hình-Anime</option>
                        <option value="3">Phim hành động</option>
                        <option value="3">Phim trung quốc</option>
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
                </div>

                <div className="mt-4 form-item ">
                    <div className="flex">
                        <label htmlFor="" className="block text-xl font-semibold text-yellow">
                            Phim ngắn
                        </label>

                        <input
                            type="radio"
                            name="radio"
                            value="1"
                            checked={openMovieSeries}
                            onChange={() => setOpenMovieSeries(!openMovieSeries)}
                        />

                        <label htmlFor="" className="block text-xl font-semibold text-yellow">
                            Phim dài tập
                        </label>
                        <input
                            type="radio"
                            name="radio"
                            checked={!openMovieSeries}
                            onChange={() => setOpenMovieSeries(!openMovieSeries)}
                        />
                    </div>
                    {openMovieSeries ? (
                        <input
                            type="text"
                            name="linkMovies"
                            value={formik.values.linkMovies}
                            className="mt-3 w-[500px] h-10 pl-4 rounded-2xl"
                            onChange={formik.handleChange}
                        />
                    ) : (
                        <InputCreate />
                    )}
                </div>

                <div className="mt-4"></div>

                <button className="mt-4 text-white" type="submit">
                    Uploat phim
                </button>
            </form>
        </div>
    );
}
