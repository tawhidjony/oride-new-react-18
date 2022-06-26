import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RequireAuth = () => {
    const auth = false
    const location = useLocation();
  return (
    auth === true ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth