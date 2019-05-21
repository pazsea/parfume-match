import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
  apiKey: 'AIzaSyDPzLW1VpAUC5x9OPF4pCJO9j5e5hO4bp4',
  authDomain: 'gjtpsniph.firebaseapp.com',
  databaseURL: 'https://gjtpsniph.firebaseio.com',
  projectId: 'gjtpsniph',
  storageBucket: 'gjtpsniph.appspot.com',
  messagingSenderId: '315707951148',
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // doSendEmailVerification = () =>
  //   this.auth.currentUser.sendEmailVerification({
  //     url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
  //   });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  wardrobe = uid => this.db.ref(`wardrobe/${uid}`);

  wardrobes = () => this.db.ref('wardrobe');

  topNote = uid => this.db.ref(`topNotes/${uid}`);

  topNotes = () => this.db.ref('topNotes');

  users = () => this.db.ref('users');

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');
}

export default Firebase;
