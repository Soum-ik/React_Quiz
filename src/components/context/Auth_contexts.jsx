import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const Auth_context = React.createContext();

export function useAuth() {
  return useContext(Auth_context);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();

    const unser = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unser;
  }, []);

  //   signUP funcation
  const singUP = async (email, password, userName) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };
  //   login funcation
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   logOut function
  const logOut = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = { currentUser, singUP, logOut, login };

  return (
    <Auth_context.Provider value={value}>
      {!loading && children}
    </Auth_context.Provider>
  );
}
