// On importe les outils React nécessaires
import { useState } from "react";                  // pour gérer ce que tape l'utilisateur
import { registerUser } from "../services/authServices"; // on utilise la fonction que tu as créée
import { useNavigate } from "react-router-dom";  // pour rediriger vers une autre page

// C'est le composant principal qu'on va afficher
export default function Register() {
  // Ces deux "états" servent à stocker ce que tape l'utilisateur
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // outil pour rediriger l'utilisateur

  // Quand l'utilisateur clique sur "S'inscrire"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // empêche le rechargement de la page par défaut
    try {
      await registerUser({ username, password }); // appel a l'authService qui va appeler le backend
      alert("Inscription réussie !");
      navigate("/login"); // redirige vers la page de connexion
    } catch (error) {
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // met à jour le state
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
