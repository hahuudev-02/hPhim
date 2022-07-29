import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import {useSelector } from 'react-redux';

export default function ProtecredRoute() {
    const isUser = useSelector((state) => state.auth.Userlogin.currentUser);
    const location = useLocation()
  return (
    isUser ? <Outlet/> : <Navigate to="/login" state={{from: location}} replace/>
  )
}
