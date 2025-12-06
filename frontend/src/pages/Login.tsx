// frontend/src/pages/Login.tsx

import { useState } from "react";
import { loginUser } from "../services/authServices";
import { useLocation, useNavigate } from "react-router-dom"; // pour rediriger après login

export default function Login() {
  // 🧠 On stocke ce que l’utilisateur tape
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ récupère l'URL d'origine ou met /me par défaut
  const from = (location.state as { from?: Location })?.from?.pathname || "/me"; //par défaut /me

  // 🧠 Quand l’utilisateur clique sur "Se connecter"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // empêche le rechargement de page

    try {
      const response = await loginUser({ username, password });
      const token = response.token;

      // ✅ On stocke le token JWT dans le navigateur
      localStorage.setItem("token", token);

      alert("Connexion réussie !");
      navigate("/me"); // redirection
    } catch (error) {
      alert("Erreur de connexion. Vérifie ton mot de passe ou ton login.");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
