import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SerService } from '../ser.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:HttpClient, private ser:SerService){

  }

  u_email = '';
  u_pass  = '';
  
  details:any = {}

  getData(){
    this.details.email = this.u_email;
    this.details.pass = this.u_pass;

    this.ser.login(this.details).subscribe((res)=>{
      console.log(res);
    },(err)=>{})

    console.log(this.details)
    


  }


}
