import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { userEmailField, userNameField, userPassField } from 'ui/logInFormUi';

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
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const LOGIN_PAGE = 'http://localhost:9099';
export const db = getDatabase(firebaseApp);

// Detect auth state
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log('logged in!');
  } else {
    console.log('no user');
  }
});

connectAuthEmulator(auth, LOGIN_PAGE);

export const loginEmailPassword = async () => {
  console.log('loginEmailPassword works!');
  const loginName = userNameField?.value;
  const loginEmail = userEmailField?.value;
  const loginPass = userPassField?.value;

  const userCreds = await signInWithEmailAndPassword(
    auth,
    loginEmail,
    loginPass
  );

  console.log('userCreds:', userCreds);
};
