import {Component, Input, OnInit} from '@angular/core';
import {FormControl,  Validators} from "@angular/forms";


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  @Input() form: any ;
  constructor() { }

  ngOnInit(): void {
    this.form.addControl('name', new FormControl('', Validators.required));
    this.form.addControl('password', new FormControl('', Validators.required));
    this.form.addControl('verifyPassword', new FormControl('', Validators.required));
  }

}
