import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm:any;
  constructor(private fb:FormBuilder, private us:UserService) {
    this.signupForm=this.fb.group({
      username:[],
      firstName:[],
      lastName:[],
      password:[],
      cpassword:[],
      dateOfBirth:[]
    });
   }

  ngOnInit(): void {
  }

  fnSignUp()
  {
    console.log("Sending: ");
    console.log(this.signupForm.value);
    //i need to call service method....   first inject the service in constructor
    this.us.signup(this.signupForm.value).subscribe((data)=>{
      console.log("Response from REST api is as below:");
      console.log(data);
    });
  }
}
