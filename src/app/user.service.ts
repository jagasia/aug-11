import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8080/user';
  constructor(private http:HttpClient) { }

  generateOtp(email:string)
  {
    return this.http.get(this.url+"/otp/"+email);
  }

  signup(user:any):Observable<object>
  {
    return this.http.post(this.url,user);
  }
  validateLogin(username:string, password:string)
  {
    return this.http.post(this.url+"/"+username+"/"+password,null);
  }
  findUserByUsername(username:string)
  {
    return this.http.get(this.url+"/"+username);
  }
  getAllusers(){
    return this.http.get(this.url);
  }
  modifyUser(user:any)
  {
    return this.http.put(this.url,user);
  }
  removeUser(username:string)
  {
    return this.http.delete(this.url+"/"+username);
  }
}
