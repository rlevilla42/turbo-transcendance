import { JSX } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth ({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem("token");
    const location = useLocation();

    if (!token) {
        // redirige vers /login en gardant la page d’origine
        return <Navigate to="/login" state={{ from: location }}replace />
    }
    return children;
}