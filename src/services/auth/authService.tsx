import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import auth from '@/services/auth/firebase';

type AuthTypes = {
  email: string;
  password: string;
};

const provider = new GoogleAuthProvider();

export const AuthService = {
  registerUser: async function ({ email, password }: AuthTypes) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        sendEmailVerification(user);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logInUser: async function ({ email, password }: AuthTypes) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signInWithGoogle: async function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
