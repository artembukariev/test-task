import {Component, Input, OnInit} from '@angular/core';
import { FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  @Input() form: any ;
  constructor() { }

  ngOnInit(): void {
    this.form.addControl('aboutInfo', new FormControl('', Validators.required));
    this.form.addControl('add', new FormControl('', Validators.required));
  }
}
