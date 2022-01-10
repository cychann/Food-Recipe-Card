import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.faceboockProvider = new FacebookAuthProvider();
  }
  login(providerName) {
    const auth = this.auth;
    const provider = this.getProvider(providerName);
    return signInWithPopup(auth, provider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Facebook":
        return this.faceboockProvider;
    }
  }
}

export default AuthService;
