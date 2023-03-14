import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from '../data-type';



@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private http:HttpClient) { }

  userSignUp(data:SignUp){
   return this.http.post('http://localhost:3000/posts/' ,data)
  }
}
