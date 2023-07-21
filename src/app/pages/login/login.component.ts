import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user!: any;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  login() {
    this.auth.signIn({
      email: this.form.value.email,
      password: this.form.value.password,
    });
  }

  recoverPassword() {
    if (this.form.value.email === '') {
      alert('Type your email!');
      return;
    }
    this.auth.recoverPassword(this.form.value.email);
  }

  logout() {
    this.auth.signOut();
  }
}
