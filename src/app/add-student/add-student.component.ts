import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentSrv : StudentService
    , private router : Router
    ) { }

  addForm : FormGroup = new FormGroup({
    'nom_eleve' : new FormControl([Validators.required ,
       Validators.minLength(3)]),
    'age' : new FormControl(),
    'genre' : new FormControl(Validators.required)
  });


  new_student : Student = new Student();
  ngOnInit(): void {
  }


  save(){
    console.log(this.new_student);
    this.studentSrv.addStudent(this.new_student)
    .subscribe(success=>{
        this.new_student = new Student();
        this.router.navigate(['/students'])
    })
  }
 
  uploadFile(event){
   let form = new FormData();
   if(event.target.files.length >0){
     let file = event.target.files[0];
     form.append("uploads[]" , file , file.name)
     this.studentSrv.upload(form)
     .subscribe((result : any)=>{
      console.log(result)
      this.new_student.photo = result.path
     })
   }
  }

}



