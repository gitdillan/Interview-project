import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm
  httpOptions
  constructor(private fb:FormBuilder, private apiservice:ApiService, private router:Router) {
    this.loginForm=this.fb.group({

      username:['',[Validators.required]],
      password:['',[Validators.required]]

    })


   }

  get f(){
    return this.loginForm.controls
  }

  onSubmit(){
    let formdata=this.loginForm.value;
    this.apiservice.loginSubmit(formdata)
    .subscribe((res:any)=>{
      // console.log(res)
      this.router.navigate(['user/bot'])
    },error=>{
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
