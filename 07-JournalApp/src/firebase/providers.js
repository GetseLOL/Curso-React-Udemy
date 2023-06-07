import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL } = res.user;

    await updateProfile(FireBaseAuth.currentUser, {
      displayName,
    });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(FireBaseAuth, email, password);
    const { uid, photoURL, displayName } = res.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};


export const logOutFireBase = async() => {
  return await FireBaseAuth.signOut()
}