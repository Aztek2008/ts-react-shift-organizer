import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyCNBZCBqZ6i3nnr2XZYIBJi8kULTEsWR2k',
  authDomain: 'ts-react-shift-organizer.firebaseapp.com',
  databaseURL:
    'https://ts-react-shift-organizer-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ts-react-shift-organizer',
  storageBucket: 'ts-react-shift-organizer.appspot.com',
  messagingSenderId: '190940113796',
  appId: '1:190940113796:web:1f102556066015e3fd4bd1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
