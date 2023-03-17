import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SerService } from '../ser.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent {
  constructor(private http:HttpClient, private ser:SerService,private toastr: ToastrService,private router:Router){

  }

  F_name = '';
  L_name = '';
  email = '';


  
  obj:any = {};
  sendData() {
    
    this.obj.f_name = this.F_name;
    this.obj.l_name = this.L_name;
    this.obj.email = this.email;
    
    this.F_name = ''
    this.L_name = '';
    this.email = '';

    this.ser.adding(this.obj).subscribe((res)=>{
      this.toastr.success('Congrats!', 'Your Credentials has been registered sucessfully!');
    },(err)=>{})
    

  }

  changeUrl(){
    this.router.navigateByUrl("/home");
  }

}
