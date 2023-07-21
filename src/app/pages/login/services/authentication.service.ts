import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, set } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  signIn(params: SignIn) {
    this.auth.signInWithEmailAndPassword(params.email, params.password).then(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  recoverPassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(
      () => {
        alert('We sent an email to you, reset your password and try again!');
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  signUp(params: SignUp) {
    this.auth
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(
        (cred) => {
          const db = getDatabase();
          set(ref(db, 'users/' + cred.user?.uid), {
            username: params.name,
            bookmarks: [],
          });
          this.router.navigate(['/signIn']);
        },
        (error: any) => {
          alert(error.message);
        }
      );
  }

  signOut() {
    this.auth.signOut().then(
      () => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        alert(error.message);
        this.router.navigate(['/']);
      }
    );
  }
}

type SignIn = {
  email: string;
  password: string;
};

type SignUp = {
  name: string;
  email: string;
  password: string;
  cPassword: string;
};
