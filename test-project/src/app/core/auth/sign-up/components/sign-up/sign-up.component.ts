import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  personalDetails!: FormGroup;
  userDetails!: FormGroup;
  additionDetails!: FormGroup;
  personal_step = false;
  user_step = false;
  addition_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      verifyPassword: ['', Validators.required]
    });
    this.userDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
    this.additionDetails = this.formBuilder.group({
      aboutInfo: ['', Validators.required],
      add: ['', Validators.required],
    });
  }

  next() {
    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) {
        return
      }
      this.step++
    }
    if (this.step == 2) {
      this.user_step = true;
      if (this.userDetails.invalid) {
        return
      }
      this.step++;
    }
  }

  previous() {
    this.step--
    if (this.step == 1) {
      this.personal_step = false;
    }
    if (this.step == 2) {
      this.addition_step = false;
    }
  }

  submit() {
    if (this.step == 3) {
      this.addition_step = true;
    }
    this.router.navigate(['/landing-page'])
    this.auth.userName = this.personalDetails.value.name
  }
}
