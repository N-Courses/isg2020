import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  constructor(private studentSrv : StudentService) { }

  /* students = [
    {
      id : 1,
      nom : "Amal",
      score : 200,
      genre : "F",
      photo : 'user.png'
    },
    {
      id : 2,
      nom : "Anwar",
      score : 250,
      genre : "G",
      photo : 'user2.png'
    } , {
      id : 1,
      nom : "Jihene",
      score : 200,
      genre : "F",
      photo : 'user.png'
    },
    {
      id : 2,
      nom : "Ilyes",
      score : 250,
      genre : "G",
      photo : 'user2.png'
    }, {
      id : 1,
      nom : "Mohamed",
      score : 200,
      genre : "G",
      photo : 'user.png'
    },
    {
      id : 2,
      nom : "Salma",
      score : 250,
      genre : "F",
      photo : 'user2.png'
    }
  ] */

  students :any[];
  students_copy : any[] = [];
  ngOnInit(): void {
    this.studentSrv.getAll()
    .subscribe((success : any[])=>{
      this.students = success;
      this.students_copy = this.students

    })
  }


  filter(event : any){
    // pour chaque  element => condition ( vrai)
   
    this.students = this.students_copy.filter((x  : any)=> 
      x.nom.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1)
  }

  sort(event : any){
    if(event.target.value == 'asc'){
      this.students = this.students.sort((a , b)=>
      a.score > b.score ? 0 : -1)
    }else{
      this.students = this.students.sort((a , b)=>
     a.score < b.score ? 0 : -1)
    }
    
  }

}
