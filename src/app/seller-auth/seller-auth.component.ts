import { Component,OnInit } from '@angular/core';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private sell:SellService) {}

    ngOnInit(): void {}
    signUp(data:Object):void{
      console.warn(data)
      this.sell.userSignUp();
    }
  
  onSubmit(data:object):void{
  console.warn(data);
}

}
