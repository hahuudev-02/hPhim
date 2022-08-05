import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
    return (
        <div className="">
            <div className="flex inline-center justify-between ">
                <div className="overview-user h-48 flex flex-col justify-between">
                    <div className="w-36 h-36 flex rounded-full bg-[#204BBA] ">
                        <div className="m-auto w-18 h-18 bg-white flex rounded-full">
                            <span className="m-auto text-lg text-[#204BBA] font-semibold">20000</span>
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
                            <span className="m-auto text-lg text-[#A80EAB] font-semibold">20000</span>
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
                <table class="mt-4 table-fixed w-full border border-green-800">
                    <thead className="h-10 bg-red-500 text-white font-bold">
                        <tr>
                            <th className="w-16">Stt</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tổng số phim</th>
                            <th>Ngày tham gia </th>
                            <th className="w-20">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" min-h-[60px]">
                            <td>1</td>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>
                                <button className="">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="Movies mt-5">
                <h4 className="text-center text-2xl text-yellow font-bold">Movies Detail</h4>
                <div className="text-2xl text-yellow font-bold">Nguyễn hà hữu</div>
                <table class="mt-4 table-fixed w-full border border-green-800">
                    <thead className="h-10 bg-red-500 text-white font-bold">
                        <tr>
                            <th className="w-16">Stt</th>
                            <th>Movies name</th>
                            <th>Tổng số tập</th>
                            <th>Ngày đăng phim </th>
                            <th>Ngày Update gần nhất </th>
                            <th className="w-24">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" min-h-[60px]">
                            <td >1</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>1961</td>
                            <td>
                                <Link to="/update"className="">Sửa</Link>
                                <button className="ml-2">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
