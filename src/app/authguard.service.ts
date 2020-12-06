import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor() { }

  canActivate(){
    if(localStorage.getItem('email')){
      return true
    }else{
      return false
    }
  }
}
