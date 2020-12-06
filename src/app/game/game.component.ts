import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private studentSrv : StudentService
  ) { 

  }
  
  id : string = '' ;
  compteur = 1;
  nb1 = Math.floor((Math.random()*20)+1)
  nb2 = Math.floor((Math.random()*20)+1)
  result = undefined;
  score = 0;
  start_date = new Date();
  student : Student;
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id']
    this.studentSrv.getById(this.id)
    .subscribe((result : Student)=>{
      this.student = result;
      console.log("result backend" , result)
    })
  }
  next(){
    if(this.compteur <10){
      if(this.result == (this.nb1 * this.nb2)){
        this.score++;
      }
      this.compteur++;
      this.nb1 = Math.floor((Math.random()*20)+1)
      this.nb2 = Math.floor((Math.random()*20)+1)
      this.result = undefined;
    }
  }
  finish(){
    if(this.result == (this.nb1 * this.nb2)){
      this.score++;
    }
    this.compteur++;

    let end_date = new Date();
    let diff = end_date.getTime() - this.start_date.getTime();
    
    this.score = Math.floor((this.score * 1000000)/diff)
    console.log(diff)

    if(this.score > this.student.score){
      this.studentSrv.updateScore(this.id , this.score)
      .subscribe(()=>{
        Swal.fire('Congrats !' , 'Best new score' , 'success')
      })
    }
  }
  back(){

    this.router.navigate(['/students'])
  }

  
}
