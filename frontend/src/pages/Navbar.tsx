// 📦 On importe les outils React et React Router
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    const [open, setOpen] = useState(false); //menu deroulant

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const toggleMenu = () => setOpen(!open);

    return (
        <nav  style={{display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee", alignItems: "center"}}>
        <div style={{display: "flex", gap: "1rem"}}>
            <Link to={"/"}>Accueil</Link>
            {!token && <Link to={"/login"}>Se connecter</Link>}
            {!token && <Link to={"/register"}>S'inscrire</Link>}
        </div>
        {token && (<div style={{ position: "relative"}}>
            <button onClick={toggleMenu}>Mon compte</button>
            {open && (<div style={{ position: "absolute",
              top: "2.5rem",
              right: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              minWidth: "150px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}>
                <Link to={"/me"} onClick={() =>setOpen(false)}>Mon profil</Link>
                <Link to={"/dashboard"} onClick={() => setOpen(false)}>Dashboard</Link>
                <button onClick={handleLogout}>Se deconecter</button>
        </div>)}
        </div>)}
        </nav>
    );
};