import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title : string = 'isg2020';
  new_var ='';
  var_type : number = 0;
  chaine : string[]=['Monday' , 'Tuesday' , 'Wednesday'];
  test : boolean = true;
  variable : any;
  nb = 0;
  myFunction(){

    this.title = " Welcome"
  }
  keyupFunction(val : string){
    this.title = val
  }

  inc(){
    this.nb++;
  }

  dec(){
    if(this.nb >0){
      this.nb--;

    }
  }

}
