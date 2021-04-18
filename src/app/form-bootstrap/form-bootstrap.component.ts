import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-bootstrap',
  templateUrl: './form-bootstrap.component.html',
  styleUrls: ['./form-bootstrap.component.css']
})
export class FormBootstrapComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      address: ['', Validators.required],
      comments: ['']
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.form.get('name').errors?.required) {
      alert("Name Required");
    } else if (this.form.get('email').errors?.required) {
      alert("Email Required");
    } else if (this.form.get('email').errors?.email) {
      alert("Email is invalid");
    } else if (this.form.get('address').errors?.required) {
      alert("Portal address required");
    } else {
      alert(JSON.stringify(this.form.value));
    }
  }

}
