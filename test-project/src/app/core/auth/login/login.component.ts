import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShowPassword: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  loginForm: FormGroup = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  onSubmit() {
    // ToDo login post request with signInData
    const signInData: any = this.loginForm.value;
    this.router.navigate(['/landing-page'])
    this.auth.userName = this.loginForm.value.email
  }
  ngOnInit(): void {
  }

}
