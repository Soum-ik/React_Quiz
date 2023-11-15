import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: import.meta.env.VITE_REACT_API_KEY,
  authDomain: import.meta.env.VITE_REACT_AUTH_DOMIN,
  projectId: import.meta.env.VITE_REACT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
  measurementId: import.meta.env.VITE_REACT_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_REACT_DATABASE_URL,
});

export default app;
