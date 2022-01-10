import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.faceboockProvider = new FacebookAuthProvider();
  }
  login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(this.auth, provider);
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Facebook":
        return this.faceboockProvider;
    }
  }

  onAuthChange(userChange) {
    onAuthStateChanged(this.auth, (user) => {
      userChange(user);
    });
  }

  logout() {
    signOut(this.auth);
  }
}

export default AuthService;
