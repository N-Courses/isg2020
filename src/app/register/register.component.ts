import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Student = new Student();
  confirmpassword;
  constructor(
    private router: Router
  ) { }

  login_form: FormGroup = new FormGroup({
    'nom': new FormControl([Validators.required, Validators.minLength(3)]),
    'email': new FormControl([Validators.required, Validators.email]),
    'password': new FormControl([Validators.required, Validators.minLength(6)]),
    'confirmpassword': new FormControl([Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {
  }

  signup() {
    console.log(this.user);
    localStorage.setItem('student', JSON.stringify(this.user))
    this.router.navigate(['/students'])

  }
  identique() {

    this.user.password != this.confirmpassword ? this.login_form.get('confirmpassword').setErrors({ 'non_identique': true }) : true
  }


}
