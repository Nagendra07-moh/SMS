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
        console.log(data)
      },(err)=>{
        console.log(err)
      })
    }

  
    imp = ''

  searchData(){
  }

  F_name =  '';
  L_name = '';
  email = '';



}
