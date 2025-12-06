import { Link } from "react-router-dom";

export default function Home () {
    return (
    <div style={{ padding: "2rem" }}>
    <h1>Bienvenue sur Turbo Transcendance</h1>
    <p>Ce projet est une web app complète avec authentification, jeu, chat, etc.</p>
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      <Link to="/login">Se connecter</Link>
      <Link to="/register">Créer un compte</Link>
      <Link to="/me">Mon Profil</Link>
    </div>
  </div>
  );
}