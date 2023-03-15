import { Component, OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import { Router } from '@angular/router';
import { login, SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private sell: SellService, private router: Router) { }

  showLogin = false;
  SignUp: SignUp ={ name: '', email: '', password: '' };
  login: login = { email: '', password: '' };

  ngOnInit(): void { }

  signUp(data: SignUp): void {
    //console.warn(data);
    this.sell.userSignUp(data)
  }

  Login(data: login): void {
    //console.warn(data);
    this.sell.userLogin(data)

  }

  onSubmit(data: object): void {
    console.warn(data);
  }

  openLogin() {
    this.showLogin = true

  }

  openSignUp() {
    this.showLogin = false
  }

}
