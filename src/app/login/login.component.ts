import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SerService } from '../ser.service';
import { FormControl,FormGroup , Validator, Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:HttpClient, private ser:SerService,private toastr: ToastrService,private route: Router){
  }

  u_email = '';
  u_pass  = '';
  
  details:any = {}

  obj:any  = {}
  getData(){
    this.details.email = this.u_email;
    this.details.pass = this.u_pass;

    this.ser.login(this.details).subscribe((res)=>{
      console.log(res);
      this.obj = res;  

      if(this.obj.email == true &&  this.obj.password == true){
          this.toastr.success('Congrats!', 'Login Sucessfull!');
          this.route.navigateByUrl('/home');
      }else if(this.obj.email == false){
          this.toastr.show('Email not found!', 'Please enter the correct email');
      }else if(this.obj.password == false ){
          this.toastr.info('wrong password', 'Please enter the correct password ');
      }else if(this.obj.email == false &&  this.obj.password == false ){
        this.toastr.info('wrong email and password', 'Please enter the correct password and email');
      }
      
    },(err)=>{})




  }


}
