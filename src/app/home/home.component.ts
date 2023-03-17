
import { SerService } from '../ser.service'
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http:HttpClient, private myser:SerService,private toastr: ToastrService,private router:Router){

  }

  allContact:any 
    ngOnInit(): void {
      this.myser.show().subscribe((data:any)=>{
        this.allContact = data
        this.TempList = data;
      },(err)=>{
        console.log(err)
      })
    }
    imp = ''
    TempList:any[] = []
    searchData(){
      if(!this.imp){
        this.TempList = this.allContact
      }
      this.TempList = []
      console.log(this.imp);
      let size = this.imp.length;
      for(let i = 0;i<this.allContact.length;i++){
        const s =  this.allContact[i].F_name.substring(0,size);
        if(s.toUpperCase() === this.imp.toUpperCase()){
          this.TempList.push(this.allContact[i])
        }
      }
    }

    delObj:any = {};
    del(i:any){

      this.delObj = i;
 
      this.myser.deleting(this.delObj).subscribe((res)=>{
        this.toastr.success('Congrats!', 'The Entry has been deleted sucessfully!');
        // console.log(`data send sucessfilly of ${this.delObj.F_name}`);
        // this.router.navigateByUrl('/home'); 
        // this.window.reload()
        window.location.reload();
        
      },(err)=>{})

          

    }

  F_name =  '';
  L_name = '';
  email = '';



}
