<h1 align="center">⚡ Projet de démarrage rapide avec Vite.js + Stack MERN 🌱</h1> 

<p align="center">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite.js">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript">
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="sass">
  <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootsrap">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node.js">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb">
</p>
<br/>
<p align="center">
   <a href="/README.md"><img src="https://img.shields.io/badge/README-es-red" alt="readme es"></a>
   <a href="/README.fr.md"><img src="https://img.shields.io/badge/README-fr-blue" alt="readme fr"></a>
</p>


## Sommaire

- [🛠️ Installation](#%EF%B8%8F-installation)
  - [Etape 1: Clonez le dépôt Github](#etape-1--clonez-le-d%C3%A9p%C3%B4t-github)
  - [Etape 2 : Installez les dpéndances](#etape-2--installez-les-dp%C3%A9ndances)
  - [Etape 3 : Configurez la partie server](#etape-3--configurer-la-partie-server)  
- [💻 Utilisation](#-utilisation)
- [🔩 Liste des dépendances](#-d%C3%A9pendances-install%C3%A9s)
- [🔑 License](#-license)
- [💡 Contributions](#-contribution)
- [💖 Soutenir le projet](#-soutenir-le-projet)

## 🛠️ Installation

### Etape 1 : Clonez le dépôt Github

- Ouvrez votre répertoire de développement pour cloner le dépot github :
   ```css
   git clone https://github.com/ToxyhDev/vitejs-stack-mern-quickstart.git
   ```

### Etape 2 : Installez les dpéndances

- Allez dans le répertoire racine du projet :
   ```shell
   cd vitejs-stack-mern-quickstart
   ```
  - Installez les dépendances globales du projet:

     ```shell
     # Avec NPM:
     npm install
     # Avec Yarn:
     yarn
     ```

- Allez dans le répertoire **client** :
   ```shell
   cd client
   ```
   - Installez les dépendances côté client:

     ```shell
     # Avec NPM:
     npm install
     # Avec Yarn:
     yarn
     ```

- Allez dans le répertoire **server** :
     ```shell
   cd ../server
   ```
   - Installez les dépendances côté server:
    
     ```shell
     # Avec NPM:
     npm install
     # Avec Yarn:
     yarn
     ```

### Etape 3 : Configurer la partie server
> **Note**
>
> Si vous ne souhaitez pas connecter immédiatement votre base de données, vous pouvez passer à la section [💻 Utilisation](#-utilisation)

9. Créer un fichier nommé .env et inscrire clé de L'API MongoDB:
    
   ```env
   ATLAS_URI=mongodb+srv://<username>:<password>@<cluster>/?retryWrites=true&w=majority
   ```
   > **Warning**
   > 
   > **Si aucune base de données n'est connectée à la partie serveur, un message d'erreur s'affichera dans la console au moment de démarrer le projet**

## 💻 Utilisation

 ### Démarez le serveur de développement:

- Rendez-vous à la racine du projet.
> **Note**
>
> C'est le répertoire global où vous avez les dossiers client et server.

- Dans ce répertoire, effectuez la commande :
```shell
# Avec NPM:
npm run dev
# Avec Yarn:
yarn run dev
```
> **Warning**
>
> Si vous souhaitez utiliser uniquemment la partie client:
>
> ```shell
> # Avec NPM:
> npm run dev-client
> # Avec Yarn:
> yarn run dev-client
> ```


## 🔩 Dépendances installés

### Dépendances de développement :

- **vite** : Outil de développement rapide pour les applications Web modernes. Offre des performances de développement élevées grâce à sa compilation rapide et son chargement à la demande des modules.

- **typescript** : Sur-ensemble de JavaScript avec des fonctionnalités de typage statique. Permet de détecter les erreurs potentielles dès la phase de développement.

- **sass** : Compilateur Sass pour transformer les fichiers Sass en CSS dans votre projet.

- **eslint**, **eslint-plugin-react-hooks** et **eslint-plugin-react-refresh** : ESLint et plugins associés pour détecter les erreurs dans le code React, avec des règles supplémentaires pour les hooks React et le rechargement à chaud (hot reloading).

### Dépendances Frontend :

- **bootstrap** : Framework CSS pour créer des interfaces Web réactives et mobiles.

- **react** et **react-dom** : Bibliothèques principales pour la construction d'interfaces utilisateur réactives. React est un framework JavaScript pour créer des composants réutilisables et React DOM facilite le rendu des composants React dans le navigateur.

- **react-router-dom** : Bibliothèque pour la gestion des routes dans une application React. Permet de créer des applications à pages multiples et de naviguer entre les différentes vues.

### Dépendances Backend :

- **cors** : Permet le partage de ressources entre les origines. Facilite la communication entre le frontend et le backend en acceptant des requêtes cross-origin.

- **dotenv** : Charge les variables d'environnement d'un fichier .env dans le fichier `process.env`. Permet de séparer les fichiers de configuration du code et de stocker des informations sensibles en toute sécurité.

- **express** : Framework Web pour Node.js. Facilite la gestion des routes, des requêtes HTTP et des middlewares.

- **mongodb** : Pilote de base de données MongoDB pour se connecter à la base de données MongoDB et travailler avec des données.

- **mongoose** : Bibliothèque de modélisation pour MongoDB en Node.js. Facilite la création de schémas pour vos données et fournit des méthodes pour interagir avec la base de données MongoDB.


## 🔑 License

[MIT](LICENSE).

## 💡 Contribution

Je suis ouvert aux contributions de la communauté ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à créer une Pull Request pour proposer vos changements.J'apprécie toutes les contributions et je m'efforcerai de les examiner dès que possible. Merci de contribuer à ce projet !

## 💖 Soutenir le projet

Si vous trouvez ce projet utile ou appréciez le travail que j'ai réalisé, vous pouvez me soutenir en m'offrant un café ☕️ via Ko-fi. Votre soutien m'encourage à continuer à améliorer et à développer ce projet pour la communauté.

[![Buy us a coffee](https://img.shields.io/badge/Support%20us%20on-Ko--fi-FF5E5B?style=flat-square&logo=kofi&logoColor=white)](https://ko-fi.com/toxdev)
