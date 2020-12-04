import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { BindingComponent } from './binding/binding.component';
import { GameComponent } from './game/game.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  
  {
    path : 'aaa',
    //component : TodoComponent
    redirectTo : 'todo',
    pathMatch : 'full'
  },
  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path : 'students',
        component : StudentsComponent
      },{
        path : 'game/:nom',
        component : GameComponent
      },{
        path : 'todo',
        component : TodoComponent
      },{
        path : 'add',
        component : AddStudentComponent
      },{
        path : 'binding',
        component : BindingComponent
      }
    ]
  }
  ,{
    path : 'register',
    component : RegisterComponent
  },
  {
    path : '**',
    component : BindingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
