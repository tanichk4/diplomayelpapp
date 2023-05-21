import {initializeApp} from "firebase/app";

import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAyfjG-BWzzDe283tWldsQvoJVILpfbRlA",
  authDomain: "auth-firebase-app-967c3.firebaseapp.com",
  projectId: "auth-firebase-app-967c3",
  storageBucket: "auth-firebase-app-967c3.appspot.com",
  messagingSenderId: "36391315149",
  appId: "1:36391315149:web:268767a1b7d999f6d6eb84",
});

export const auth = getAuth();

export default app;

