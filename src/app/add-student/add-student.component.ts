import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

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
    this.new_student = new Student();
  }
 

}



