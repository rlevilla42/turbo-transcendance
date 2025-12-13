# Utilise une version Node adaptée
FROM node:20-alpine

WORKDIR /app

# On copie uniquement les fichiers de dépendances
COPY ../frontend/package.json package-lock.json ./

# On installe les librairies (node_modules)
RUN npm install

# ATTENTION : On ne fait PAS de "COPY . ." ici.
# Le code source sera apporté par le volume du docker-compose.

# Commande par défaut (sera souvent surchargée par le docker-compose, mais utile au cas où)
CMD ["npm", "run", "dev", "--", "--host"]