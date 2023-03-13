import { Component,OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private sell:SellService, private router:Router) {}

    ngOnInit(): void {}
    signUp(data:object):void{
        this.sell.userSignUp(data).subscribe((result)=>{
        if(result){
          this.router.navigate(['seller-home'])
        }
      });
    }
  
  onSubmit(data:object):void{
  console.warn(data);
}

}
