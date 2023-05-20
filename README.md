# Todo App React

A simple To-Do list app built with React and Firebase

## Firebase Setup
### Create Firebase project

- Go to https://console.firebase.google.com/
- Click **Add Project** and follow the steps until the end.
- Add a Web App
    - In **Get started by adding Firebase to your app** section, click on **Web**
        - Choose a name and check **Also set up Firebase Hosting for this app.**
        - Follow the steps until the end.
- Create Firestore Database
    -  In the right menu, go to **Build > Firestore Database**
    -  Follow the steps until the end.
- Add firebase config to the project
    - Go to **Project Overview > Project settings**
    - In **Your apps** section, copy the firebase config and paste it to your **/src/firebase.js** file.

## Install

```
npm install
```

## Run project

If you want to run the project locally

```
npm start
```

## Deploy

In your project directory :

Log into Firebase using your Google account by running the following command
```
firebase login
```

Setting up your project directory 
```
firebase init
```

Deploy project
```
firebase deploy
```

## License

MIT © 2023 Guillaume Brunier





