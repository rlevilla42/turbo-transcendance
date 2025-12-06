import { useState } from "react";
import { loginUser } from "../services/authServices";
import { useNavigate } from "react-router-dom"; // pour rediriger après login

export default function Logout() {

    // Hook pour naviguer vers une autre page
    const navigate = useNavigate();

    // Supprimer le token JWT du localStorage
    const handleLogout = () => {
    localStorage.removeItem("token");

    //rediriger vers la page de connexion
    navigate("/login");
    };
    return (
        <button onClick={handleLogout}>
            Se déconnecter
        </button>
    );
};