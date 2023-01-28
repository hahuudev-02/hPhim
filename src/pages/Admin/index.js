import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteMovie, getAmoutMovie } from '~/api/axios/moviesApi';
import { getFullUser } from '~/api/axios/userApi';


export default function Admin() {
    const [render, setRender] = useState(false);
    const [users, setUsers] = useState([]);
    const [detailUser, setDetailUser] = useState([]);
    const [swalProps, setSwalProps] = useState({});

    const dispatch = useDispatch();

    const token = useSelector((state) => state.currentUser.auth.token);
    const nameAdmin = useSelector((state) => state.currentUser.auth.Userlogin.currentUser.name);
    const amoutMovie = useSelector((state) => state.movies.getAmountMovie);

    useEffect(() => {
        getFullUser(token).then((result) => {
            setUsers(result);
            setDetailUser(result[0]);
        });
        getAmoutMovie({ dispatch });
    }, [render, dispatch, token]);

    const handleDelete = async (name, id) => {
        console.log(id);
        setSwalProps({
            show: 'j',
            title: `<div>Bạn chắn chắn muốn xóa <span class="text-red-500">${name}</span>?</div>`,
            text: 'Mời lựa chọn',
            showConfirmButton: true,
            confirmButtonText: 'Yes ạ',
            showCancelButton: true,
            cancelButtonText: 'Đóng',
            // background: "red"+,
        });

        await deleteMovie(id);
        toast('Delete SuccessFully !!');
    };
    const handleConfirm = async (id) => {
        console.log(id);
        setRender(!render);
    };

    return (
        <div className="">
            <h2 className="admin text-2xl text-white font-bont">Admin: {nameAdmin}</h2>

            <div className="mt-4 flex inline-center justify-between ">
                <div className="overview-user h-48 flex flex-col justify-between">
                    <div className="w-36 h-36 flex rounded-full bg-[#204BBA] ">
                        <div className="m-auto w-18 h-18 bg-white flex rounded-full">
                            <span className="m-auto text-lg text-[#204BBA] font-semibold">{users.length}</span>
                        </div>
                    </div>
                    <span className="mx-auto text-lg text-white font-semibold flex items-center">
                        <UserOutlined className="mr-2" />
                        Users
                    </span>
                </div>

                <div className="overview-user h-48 flex flex-col justify-between">
                    <div className="w-36 h-36 flex rounded-full bg-[#A80EAB] ">
                        <div className="m-auto w-18 h-18 bg-white flex rounded-full">
                            <span className="m-auto text-lg text-[#A80EAB] font-semibold">{amoutMovie}</span>
                        </div>
                    </div>
                    <span className="mx-auto text-lg text-white font-semibold flex items-center">
                        <VideoCameraOutlined className="mr-2" />
                        Movies
                    </span>
                </div>

                <div className="overview-user h-48 flex flex-col justify-between">
                    <div className="w-36 h-36 flex rounded-full bg-[#00A67C] ">
                        <div className="m-auto w-18 h-18 bg-white flex rounded-full">
                            <span className="m-auto text-lg text-[#00A67C] font-semibold">Chap</span>
                        </div>
                    </div>
                    <span className="mx-auto text-lg text-white font-semibold">User</span>
                </div>
            </div>

            <div className="users mt-5">
                <h4 className="text-center text-2xl text-yellow font-bold">User</h4>
                <table className="mt-4 table-fixed w-full border border-green-800">
                    <thead className="h-10 bg-red-500 text-white font-bold">
                        <tr>
                            <th className="w-16">Stt</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tổng số phim</th>
                            <th>Ngày tham gia </th>
                            <th className="w-28">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <tr className="movie-item" key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.moviesId.length}</td>
                                <td>{user.createdAt.split('T')[0]}</td>
                                <td>
                                    <button className="text-white hover:text-red-500">Xóa</button>
                                    <button
                                        className="ml-4 text-white hover:text-red-500"
                                        onClick={() => setDetailUser(user)}
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="Movies mt-5">
                <h4 className="text-center text-2xl text-yellow font-bold">Movies Detail</h4>
                <div className="text-2xl text-yellow font-bold">User Name: {detailUser.name}</div>
                <table className="mt-4 table-fixed w-full border border-green-800">
                    <thead className="h-10 bg-red-500 text-white font-bold">
                        <tr>
                            <th className="w-16">Stt</th>
                            <th>Movies name</th>
                            <th>Tổng số tập</th>
                            <th>Ngày đăng phim </th>
                            <th>Ngày Update gần nhất </th>
                            <th className="w-28">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detailUser.moviesId?.map((movie, index) => (
                            <tr className="movie-item min-h-[60px]" key={movie._id}>
                                <td>{index + 1}</td>
                                <td>{movie.name}</td>
                                <td>{movie.chapMp4s.length}</td>
                                <td>{movie.createdAt.split('T')[0]}</td>
                                <td>{movie.updatedAt.split('T')[0]}</td>
                                <td className="flex-center">
                                    <Link to={`/update/${movie.slug}`} className="text-white hover:text-red-500">
                                        Sửa
                                    </Link>{' '}
                                    <SweetAlert2
                                        {...swalProps}
                                        didClose={() => {
                                            setSwalProps();
                                        }}
                                        onConfirm={() => {
                                            handleConfirm(movie._id);
                                        }}
                                    />
                                    <button
                                        className="ml-4 text-white hover:text-red-500"
                                        onClick={() => handleDelete(movie.name, movie._id)}
                                    >
                                        Xóa
                                    </button>
                                    <ToastContainer autoClose={2000} type="success" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
