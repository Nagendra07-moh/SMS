import { Component } from '@angular/core';
import { SerService } from '../ser.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private myser: SerService){};

  allContact:any 
    ngOnInit(): void {
      this.myser.show().subscribe((data:any)=>{
        this.allContact = data
        this.TempList = data;
        // console.log(this.TempList);
        // console.log(data)
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

  

  F_name =  '';
  L_name = '';
  email = '';



}
