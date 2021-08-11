import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ɵangular_packages_router_router_b } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeForm:any;
  constructor(private fb:FormBuilder, private us:UserService) { 
    this.changeForm=this.fb.group({
      email:[],
      otp:[],
      username:[],
      password:[],
      cpassword:[]
    });
  }

  ngOnInit(): void {
  }

  fnGenerateOtp()
  {
    var email=this.changeForm.controls['email'].value;
    if(email=='')
    {
      alert('Please enter email address to generate otp')
      return;
    }
    this.us.generateOtp(email).subscribe((data)=>{
      localStorage.setItem('otp',data.toString());
    });
  }

  fnChangePassword()
  {
    //check otp entered
    var otp=localStorage.getItem('otp');
    console.log('from localstorage:'+otp);
    var userEnteredOtp:string=this.changeForm.controls['otp'].value;
    console.log('user entered otp:'+userEnteredOtp);
    if(otp!=userEnteredOtp)
    {
      alert('Otp is incorrect');
      return;
    }
    this.us.findUserByUsername

  }
}
