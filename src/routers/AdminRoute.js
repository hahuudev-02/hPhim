import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminRoute() {
    const isUserAdmin = useSelector((state) => state.currentUser.auth.Userlogin?.currentUser);
    const location = useLocation();
    return !!isUserAdmin & isUserAdmin?.is_Admin  ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}
