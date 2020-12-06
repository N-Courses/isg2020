import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:5000';

  addStudent(body : Student){
    return this.http.post(this.url + '/add_student' , body )

  }
  getAll(){
    return this.http.get(this.url + '/all_students')
  }

  getById(id){
    return this.http.get(this.url + '/student/'+id)
  }

  updateScore(id :any , s : any){
    return this.http.put(this.url + '/update_score/'+id ,{ score : s})

  }
  update(id , body : Student){
    return this.http.put(this.url + '/update_student/'+id , body )

  }
  remove(id){
    return this.http.delete(this.url + '/student/'+id)

  }

  upload(file){
    return this.http.post(this.url+'/upload'  ,file )
  }

  register(body : Student){
    return this.http.post(this.url+'/register' , body)
  }

  login(email , password){
    return this.http.post(this.url+'/login' , 
    {email : email , password : password})
  }

}
