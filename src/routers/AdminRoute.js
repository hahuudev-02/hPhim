import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import {useSelector } from 'react-redux';

export default function AdminRoute() {
    const isUserAdmin = useSelector((state) => state.auth.Userlogin.currentUser.is_Admin);
    const location = useLocation()
  return (
    isUserAdmin ? <Outlet/> : <Navigate to="/" state={{from: location}} replace/>
  )
}
