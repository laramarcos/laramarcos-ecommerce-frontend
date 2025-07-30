import React  from "react"
import { Navigate } from "react-router-dom";

export default function AdminGuard({ children }) {

    const user = JSON.parse(localStorage.getItem('user'));

    return user?.role == 'admin' ? children : <Navigate to="/" replace />
    
}