# Hospital App – Full Stack avec Docker

Cette application est un système de gestion hospitalière simple développé avec :
- **Frontend** : Angular (servi via Nginx)
- **Backend** : Spring Boot (Java 21)
- **Base de données** : MongoDB
- **Conteneurisation** : Docker + Docker Compose

---

##  Fonctionnalités

- Connexion avec login simple
- Gestion des patients (CRUD)
- Gestion des rendez-vous (CRUD)
- Interface moderne avec animation
- Backend sécurisé avec API REST

---

## Prérequis

- [Docker Desktop] installé sur votre machine
- Aucun autre service ne doit utiliser les ports suivants :
  - `4200` (frontend)
  - `8085` (backend)
  - `27017` (MongoDB)

---

##  Installation et exécution


# 1. Cloner le projet
git clone 
cd hospital-app-docker

# 2. Lancer l'application avec Docker
docker-compose up --build
