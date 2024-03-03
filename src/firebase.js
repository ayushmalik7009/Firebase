import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBBvLyIYV0lk-0xnVxwXEgTDWMjpUxw1pw",
    authDomain: "hallowed-garden-403320.firebaseapp.com",
    projectId: "hallowed-garden-403320",
    storageBucket: "hallowed-garden-403320.appspot.com",
    messagingSenderId: "16603821477",
    appId: "1:16603821477:web:4e4102f98a00ce4361a44c",
    databaseURL:"https://hallowed-garden-403320-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig);
