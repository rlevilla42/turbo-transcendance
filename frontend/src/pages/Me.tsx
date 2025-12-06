const API_BASE_URL = "http://localhost:8080";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Me() {
    const [username, setUsername] = useState<String | null>(null);

    // Hook pour naviguer vers une autre page
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchMe() {
        // On récupère le token JWT dans le navigateur (stocké après login)
        const token = localStorage.getItem("token");

        // Si pas de token → l'utilisateur n'est pas connecté → on le redirige vers /login
        if (!token) {
            navigate("/login");
            return;
        }
        try {
        // Sinon, on appelle l'API sécurisée /me pour récupérer les infos utilisateur
        const response = await fetch(`${API_BASE_URL}/me`, {
            method: "GET",
            headers: {
                // On envoie le token dans l'en-tête Authorization
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error("Token invalid");
            
        }
        const data = await response.json();
        setUsername(data.username);
    } catch(error) {
        console.log("Error: ", error);
        // Si le token est invalide → on le supprime
        localStorage.removeItem("token");
        navigate("/login");
    }
};
    fetchMe(); // ⬇️ On appelle la fonction juste après l’avoir définie
    }, [navigate]); // Le useEffect se relance seulement si `navigate` change

     // Si on n’a pas encore reçu le nom → on affiche "chargement"
    if (!username) return <p>Chargement...</p>;

  // Sinon, on affiche la page avec le nom d'utilisateur
  return (
    <div>
      <h2>Bienvenue, {username} ! 👋</h2>
      <p>Ceci est ta page personnelle sécurisée.</p>
    </div>
  );  // ✅ fin du composant Me}
}