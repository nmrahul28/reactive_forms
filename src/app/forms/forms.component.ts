import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public user_data: FormGroup;
  public address: FormGroup;

  constructor() { }
  ngOnInit() {
    this.user_data =new FormGroup({
      employee_name: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
      email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
      phone: new FormControl('',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('/^[6-9]\d{9}$/')])),
      employee_id: new FormControl('',Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4)])),
      address:new FormGroup({
        street_name:new FormControl('', Validators.required),
        city_name:new FormControl('', Validators.required),
        state_name:new FormControl('',Validators.required),
        zip:new FormControl('',Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)]))
      })
      });

  }

  onSubmit() {
    console.log('Valid', this.user_data.valid);
    console.log('Name', this.user_data.value.employee_name);
    console.log('Email', this.user_data.value.email);
    console.log('Message', this.user_data.value.phone);
    console.log(this.user_data.value);
  }


}
