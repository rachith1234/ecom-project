import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class SellService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router:Router) {}

  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/posts/', data, { observe: 'response' }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    
    });

    
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:login){
    console.warn(data)
    this.http.get(`http://localhost:3000/posts?email=${data.email}&password=${data.password}`, { observe: 'response' }).subscribe((result) => {
      console.warn(result)
      if(result && result.body && Array.isArray(result.body) && result.body.length){
        console.warn("user logged in");
        localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      }else{
        console.warn("login failed")
        console.log(result.body);
      }
          
    
    });

  }

}
