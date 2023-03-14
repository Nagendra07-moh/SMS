import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private http:HttpClient, private ser:SerService){

  }
  obj:any = {};

  sendData() {
    
    this.obj.f_name = this.F_name;
    this.obj.l_name = this.L_name;
    this.obj.email = this.email;
    this.obj.pass = this.Pass;
    
    this.F_name = ''
    this.L_name = '';
    this.email = '';
    this.Pass = '';

    this.ser.register(this.obj).subscribe((res)=>{
      console.log(res);
    },(err)=>{})
    

  }



  F_name  = '';
  L_name = '';
  email = '';
  Pass = '';



}
