import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private http:HttpClient) { }

  userSignUp(data:any){
   return this.http.post('http://localhost:3000/posts',data)
  }
}
