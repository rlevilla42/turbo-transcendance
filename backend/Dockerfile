# Tu as dit avoir installé JDK 21, donc autant l'utiliser ici aussi
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# On copie Maven wrapper et le pom.xml pour télécharger les dépendances
COPY .mvn .mvn
COPY mvnw pom.xml ./

# On donne les droits d'exécution au wrapper
RUN chmod +x mvnw
# Astuce : On télécharge les dépendances MAINTENANT pour qu'elles soient en cache.
# Comme ça, le redémarrage du conteneur sera super rapide.
RUN ./mvnw dependency:go-offline

# Pareil ici : PAS de COPY src. Le code viendra du volume.
# COPY src ./src

CMD ["./mvnw", "spring-boot:run", "-Dspring-boot.run.fork=false"]
# CMD ["./mvnw", "spring-boot:run", "-Dspring-boot.run.fork=false"]