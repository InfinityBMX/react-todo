import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCr8Zor3z0--igaFpUvzdjyq8GJYLgYd8k",
    authDomain: "react-todo-app-4190d.firebaseapp.com",
    databaseURL: "https://react-todo-app-4190d.firebaseio.com",
    projectId: "react-todo-app-4190d",
    storageBucket: "react-todo-app-4190d.appspot.com",
    messagingSenderId: "433767617327"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;