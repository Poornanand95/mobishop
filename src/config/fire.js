import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCBL2IGSjTDnln3q8hJ7t9DvNW6mtNtFGk',
  authDomain: 'mobishop-f22b8.firebaseapp.com',
  projectId: 'mobishop-f22b8',
  storageBucket: 'mobishop-f22b8.appspot.com',
  messagingSenderId: '148584189407',
  appId: '1:148584189407:web:6faef475551cc3e963886a',
};

const fie = firebase.initializeApp(firebaseConfig);

export default firebase;
