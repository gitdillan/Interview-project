import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {FormBuilder,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
 welcome
 chatForm

  constructor( private apiservice:ApiService, private fb:FormBuilder, private _snackBar: MatSnackBar) { 

 
    this.chatForm=this.fb.group({

      message:['',[Validators.required]]

    })

  }

  onSubmit(){
    //alert("here")
    let formdata=this.chatForm.value;
    //console.log(formdata)
    this.apiservice.chatSubmit(formdata)
    .subscribe((res:any)=>{
     console.log(res)
      
    },error=>{
      console.warn(error)
    })
  }

  ngOnInit() {

    this.apiservice.welcomeMsg().subscribe((res:any)=>{

      console.log(res)
      this.welcome=res
      this._snackBar.open(this.welcome.default_intents.welcome);
      
    })
  }

}
