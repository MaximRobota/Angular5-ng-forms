import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

export function EmailValidator(c: FormControl) {
  const EMAIL_REGEXP = new RegExp('\\S+@\\S+\\.\\S+');
  return EMAIL_REGEXP.test(c.value) ? null : { 'invalidEmail': true };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      person: new FormGroup({
        name: new FormControl('', Validators.maxLength(5)),
        age: new FormControl()
      }),
      city: [''],
      email: ['', EmailValidator]
    });
  }

  setValue() {
    this.form.setValue({
      person: {
        name: 'Mikhail',
        age: 27
      },
      city: 'Kyiv',
      email: 'mm@gmail.com'
    });
  }
}
