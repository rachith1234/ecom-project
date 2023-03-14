import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class SellService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router:Router) { }

  userSignUp(data: SignUp) {
    let result = this.http.post('http://localhost:3000/posts/', data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      console.warn("result", result);
    })

    return false
  }
}
