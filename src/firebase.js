import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ799wGCVYs0epUFdANY-QHIXWrDuskxk',
  authDomain: 'login-1a9eb.firebaseapp.com',
  projectId: 'login-1a9eb',
  storageBucket: 'login-1a9eb.appspot.com',
  messagingSenderId: '74555616474',
  appId: '1:74555616474:web:c331dede03ca7607bd09e3',
  measurementId: 'G-6D3BH9158R',
};

const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
const dbService = getFirestore(app);
const storageService = getStorage(app);
const storage = getStorage();
const storageRef = ref(storage);
const spaceRef = ref(storage, 'images/space.jpg');
const imagesRef = spaceRef.parent;
const rootRef = spaceRef.root;

export {
  app,
  authService,
  dbService,
  storageService,
  storageRef,
  storage,
  imagesRef,
  rootRef,
  spaceRef,
};
