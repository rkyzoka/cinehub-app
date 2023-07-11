import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  signIn(params: Data) {
    this.auth.signInWithEmailAndPassword(params.email, params.password).then(
      () => {
        localStorage.setItem('token', 'true');
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

  signUp(params: Data) {
    this.auth
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(
        () => {
          alert('Account created successfully!');
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
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      },
      (error: any) => {
        alert(error.message);
        this.router.navigate(['/']);
      }
    );
  }
}

type Data = {
  email: string;
  password: string;
};
