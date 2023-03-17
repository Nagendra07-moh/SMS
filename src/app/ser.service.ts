import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(public http : HttpClient) {}

  apiUrl:any = 'http://localhost:5000';

  register(obj:any):Observable<any>{
   return this.http.post(`${this.apiUrl}/sign-up`,obj);
  }

  login(details:any){
    return this.http.post(`${this.apiUrl}/login`,details);
  }

  adding(details:any){
    return this.http.post(`${this.apiUrl}/add`,details);
  }

  show(){
    return this.http.get(this.apiUrl + '/home');
  }

  saveUser(obj:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/add`,obj)
  }
  deleting(details:any){
    return this.http.post(`${this.apiUrl}/home`,details);
  }

}
