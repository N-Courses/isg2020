import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ) { 

  }
  
  nom : string = '' ;
  compteur = 1;
  nb1 = Math.floor((Math.random()*20)+1)
  nb2 = Math.floor((Math.random()*20)+1)
  result = undefined;
  score = 0;
  start_date = new Date();
  ngOnInit(): void { 
    this.nom = this.route.snapshot.params['nom']
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
  }
  back(){

    this.router.navigate(['/students'])
  }

  
}
