import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCr8Zor3z0--igaFpUvzdjyq8GJYLgYd8k",
  authDomain: "react-todo-app-4190d.firebaseapp.com",
  databaseURL: "https://react-todo-app-4190d.firebaseio.com",
  projectId: "react-todo-app-4190d",
  storageBucket: "react-todo-app-4190d.appspot.com",
  messagingSenderId: "433767617327"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Jeff',
    age: 33
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (something) => {
  console.log('todo added', something.key, something.val());
});

var newTodoRef = todosRef.push({
  text: 'Walk the dog'
});

newTodoRef = todosRef.push({
  text: 'Something else'
});