import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCIG0XWkvRg7-ylJqKQnwLOGv8gjbXtnQY",
  authDomain: "turnout-a3b89.firebaseapp.com",
  databaseURL: "https://turnout-a3b89.firebaseio.com",
  projectId: "turnout-a3b89",
  storageBucket: "turnout-a3b89.appspot.com",
  messagingSenderId: "836394725505"
};


export const firebaseApp = firebase.initializeApp(config)
export const eventRef = firebaseApp.database().ref().child('events')
