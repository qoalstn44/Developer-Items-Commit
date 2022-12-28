import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA2TLFx7wD3kHfa3oYHk1TJcz2qoUcTdkA',
  authDomain: 'dlsdus-66ec4.firebaseapp.com',
  projectId: 'dlsdus-66ec4',
  storageBucket: 'dlsdus-66ec4.appspot.com',
  messagingSenderId: '124286654002',
  appId: '1:124286654002:web:c5e13e88ec34c169018e2b',
};

const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
const dbService = getFirestore(app);
const storageService = getStorage(app);

export { app, authService, dbService, storageService };
