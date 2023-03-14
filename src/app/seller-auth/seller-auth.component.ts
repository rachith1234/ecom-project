import { Component,OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import {Router} from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private sell:SellService, private router:Router) {}

  showLogin =false

    ngOnInit(): void {}
    signUp(data:SignUp):void{
        this.sell.userSignUp(data)
    }
  
  onSubmit(data:object):void{
  console.warn(data);
}

openLogin(){
  this.showLogin=true

}

openSignUp(){
  this.showLogin=false
}

}
