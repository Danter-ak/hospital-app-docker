FROM openjdk:21-jdk-slim
WORKDIR /app

COPY .mvn .mvn
COPY mvnw .
COPY pom.xml .

# Télécharger les dépendances
RUN chmod +x mvnw && ./mvnw dependency:go-offline

# Copier le code source et builder
COPY src src
RUN ./mvnw clean package -DskipTests

# Lancer l'application avec le jar généré
CMD ["java", "-jar", "target/hospital-backend-0.0.1-SNAPSHOT.jar"]