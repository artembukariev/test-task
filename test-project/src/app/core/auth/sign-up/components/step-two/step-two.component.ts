import {Component, Input, OnInit} from '@angular/core';
import { FormControl,  Validators} from "@angular/forms";


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  @Input() form: any ;
  constructor() { }

  ngOnInit(): void {
    this.form.addControl('firstName', new FormControl('', Validators.required));
    this.form.addControl('lastName', new FormControl('', Validators.required));
    this.form.addControl('dateOfBirth', new FormControl('', Validators.required));
  }
}
