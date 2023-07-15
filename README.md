# Quick start project with Vite.js + Stack MERN

## Installation
### Étape 1 : Clone du dépôt Githun

1. Ouvrez votre répertoire de développement pour cloner le dépot github : **`git clone https://github.com/ToxyhDev/vitejs-stack-mern-quickstart.git`**

### Etape 2 : Installer les dpéndances

3. Accédez au répertoire du projet : **`cd vitejs-stack-mern-quickstart`**
4. Installer les dépendances du projet global:
   - Commande NPM: **`npm install`**
   - Commande Yarn: **`yarn`**

5. Accédez au répertoire du projet : **`cd client`**
6. Installer les dépendances du projet global:
   - Commande NPM: **`npm install`**
   - Commande Yarn: **`yarn`**

7. Accédez au répertoire du projet : **`cd ../server`**
8. Installer les dépendances du projet global:
   - Commande NPM: **`npm install`**
   - Commande Yarn: **`yarn`**

### Etape 3 : Configurer la partie server

9. Créer le fichier .env contenant la clé de L'API MongoDB:
    ````bash
    echo "ATLAS_URI=" > .env
    ````
    > **ATTENTION si aucune base de donée est connecté à la partie server un message d'erreur s'affichera dans la console au moment de démarer le projet**

    

## Utilisation

Vous pouvez commener à renommer le fichier global du votre projet

Pour démarer le serveur de dévelopement partie client et serfer:
```yarn
yarn run dev
```
Si vous ne sougaitez utiliser uniquemment la partie client:
```
yarn run dev-client
```

## Dépendances du projet
  - **mongodb** installe le pilote de base de données MongoDB qui permet à vos applications Node.js de se connecter à la base de données et de travailler avec des données.
- **express** installe le framework Web pour Node.js. (Cela nous facilitera la vie.)
- **cors** installe un package Node.js qui permet le partage de ressources entre les origines.
- **dotenv** installe le module qui charge les variables d'environnement d'un fichier .env dans le fichier process.env. Cela vous permet de séparer les fichiers de configuration du code.
- **mongoose**
