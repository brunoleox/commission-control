import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyB1OZLvSHVnw33qvLLAnsYLJrLhvdynDXE',
  authDomain: 'comission-control.firebaseapp.com',
  projectId: 'comission-control',
  storageBucket: 'comission-control.appspot.com',
  messagingSenderId: '253208612958',
  appId: '1:253208612958:web:a78e65fdc6e2a48866a4cf',
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export { firebase }
