# 🚀 Turbo Transcendance

Turbo Transcendance est un projet full-stack ambitieux inspiré du sujet `ft_transcendence` de l'école 42, combinant **authentification sécurisée**, **jeu multijoueur (Pong)**, **chat en temps réel**, **profils utilisateurs** et une **infrastructure DevOps complète**.

---

## 🧱 Stack Technique

### Frontend
- **React** + **TypeScript** (avec Vite)
- Routing protégé via `react-router-dom`
- Authentification avec **JWT**
- Gestion de l'état avec `useState` et `useEffect`
- **socket.io-client** pour le chat et le jeu temps réel

### Backend
- **Java** avec **Spring Boot**
- Authentification sécurisée avec **JWT**
- REST API (login, register, `/me`, etc.)
- **PostgreSQL** comme base de données principale
- (à venir) WebSocket server pour le chat et le jeu

### DevOps & Infra
- **Docker** (frontend, backend, PostgreSQL)
- Fichier `.env` centralisé pour toutes les variables d'environnement
- (à venir) CI/CD, monitoring, reverse proxy (Nginx), HTTPS, OAuth2, 2FA

---

## 📚 Fonctionnalités prévues

### 🔐 Authentification
- [x] Register / Login
- [x] Stockage du token JWT
- [x] Redirection automatique après login
- [x] Navbar dynamique selon le statut connecté
- [x] Protection des routes avec `RequireAuth`
- [ ] 2FA / MFA
- [ ] OAuth2 (connexion via 42, Google...)

### 🧑‍💻 Frontend (React)
- [x] Pages : `Home`, `Login`, `Register`, `Me`, `Dashboard`
- [x] Redirection post-login vers la route demandée
- [x] `Navbar` avec menu déroulant conditionnel
- [ ] `Chat` en temps réel (avec socket.io)
- [ ] `Pong` multijoueur (canvas + WebSocket)
- [ ] Système d'amis, invitations de partie
- [ ] Système de classement / leaderboard
- [ ] Design responsive et épuré

### 🖥 Backend (Spring Boot)
- [x] Login / Register avec vérification sécurisée
- [x] Endpoint `/me` sécurisé avec JWT
- [ ] WebSocket intégré pour le chat
- [ ] Gestion des parties Pong (matchmaking, score, etc.)
- [ ] Gestion des amis et du statut en ligne

### 🐳 DevOps
- [x] Dockerisation frontend / backend / DB
- [x] Hot reload frontend et backend
- [ ] CI/CD avec GitHub Actions ou GitLab CI
- [ ] Monitoring (Prometheus, Grafana)
- [ ] HTTPS, reverse proxy avec Nginx

---

## 🔄 Navigation

| Page        | Route        | Accès     |
|-------------|--------------|-----------|
| Accueil     | `/`          | Public    |
| Login       | `/login`     | Public    |
| Register    | `/register`  | Public    |
| Dashboard   | `/dashboard` | Privée    |
| Mon profil  | `/me`        | Privée    |
| Chat        | `/chat`      | Privée    |
| Pong        | `/pong`      | Privée    |

---

## 🧠 Contexte pour Junie (ou tout assistant IA)

Ce projet repose sur une progression **étape par étape**, avec des explications détaillées et des imports codés proprement.  
Junie doit toujours :
- Prioriser la sécurité (ex : vérifier la validité du token JWT)
- Protéger les routes sensibles avec `RequireAuth`
- Gérer le code frontend **dans `frontend/src/pages/`**
- Etendre le projet à terme avec WebSocket, Pong et Chat
- Éviter toute logique frontend côté backend (Java)
- S’assurer de la cohérence entre le contenu de `localStorage` et les routes affichées
- Conserver l’état d’auth avec un futur `AuthContext`

---

## 📦 Dossier `frontend/`

- `App.tsx` : définition des routes
- `pages/` : tous les composants de pages
- `services/` : auth et WebSocket
- `RequireAuth.tsx` : protection des routes privées
- `.env` : variables comme `VITE_BACKEND_URL`

---

## 📦 Dossier `backend/` (Spring Boot)

- `AuthController`, `JwtUtil`, etc.
- Gestion de `/login`, `/register`, `/me`
- Configuration sécurité Spring
- Connexion PostgreSQL via `application.properties`

---

## ✅ État actuel (juillet 2025)

- ✅ Auth sécurisée et fonctionnelle
- ✅ Redirection post-login
- ✅ Docker fonctionnel (dev env)
- 🟡 WebSocket pas encore implémenté
- 🟡 Pages Pong et Chat présentes mais vides
- ❌ Pas encore de logique temps réel ni de matchmaking

---

## ✨ Objectif final

Une app **temps réel** gamifiée, sécurisée, performante et dockerisée :
- 🎮 Jouer à Pong contre d’autres utilisateurs
- 💬 Chatter en live avec les joueurs
- 🧑‍🤝‍🧑 Voir qui est connecté, ajouter en ami, défier
- 📊 Suivre ses stats et son classement

