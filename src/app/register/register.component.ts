import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Student = new Student();
  confirmpassword;
  constructor(
    private router: Router,
    private studentSrv : StudentService,
    private toastr : ToastrService
  ) { }

  login_form: FormGroup = new FormGroup({
    'nom': new FormControl([Validators.required, Validators.minLength(3)]),
    'email': new FormControl([Validators.required, Validators.email]),
    'password': new FormControl([Validators.required, Validators.minLength(6)]),
    'confirmpassword': new FormControl([Validators.required, Validators.minLength(6)])
  })

  ngOnInit(): void {

    if(localStorage.getItem('email')){
      this.router.navigate(['/students'])
    }
  }

  save() {
    console.log(this.user);
      this.studentSrv.register(this.user)
      .subscribe((result)=>{
        console.log('save')
        this.toastr.success('student saved')
      }, (err)=>{
        this.toastr.error(err.error.msg)
      })
  }


  login(){
    this.studentSrv.login
    (this.user.email , this.user.password)
    .subscribe((result : any)=>{
      localStorage.setItem('email' , result.email)
      localStorage.setItem('isLoggedIn' , 'true')
      localStorage.setItem('student' , JSON.stringify(result))

      this.toastr.success('success')
    } , err=>{
      this.toastr.error(err.error.msg)
    })
  }

  identique() {
    if(this.user.password != this.confirmpassword){
      this.login_form.get('confirmpassword')
      .setErrors({'non_identique' : true})
    }
  }


}
