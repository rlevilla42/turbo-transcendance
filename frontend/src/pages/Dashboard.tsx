import { useEffect } from "react";

export default function Dashboard() {
    useEffect(() => {
        console.log("🔐 L'utilisateur est bien connecté, bienvenue dans le dashboard !")
    }, [])

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎮 Dashboard</h1>
      <p>Bienvenue sur ton espace personnel sécurisé.</p>

      <ul>
        <li>👤 Statut de connexion : connecté ✅</li>
        <li>🏓 Accès au jeu Pong (bientôt)</li>
        <li>💬 Accès au chat (bientôt)</li>
        <li>📊 Score et classement (à venir)</li>
      </ul>
    </div>
  );
}