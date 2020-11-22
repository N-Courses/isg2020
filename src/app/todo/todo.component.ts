import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  list : any[] = [];
  new_task = '';
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.new_task || this.new_task !=''){
      let myObject = {
        content : this.new_task,
        created_at : new Date(),
        status : 0
      }
      this.list.push(myObject)
      this.new_task = ''
      console.log(this.list)
    }

  }
  done(i){
    this.list[i].status = 1;
  }

}
