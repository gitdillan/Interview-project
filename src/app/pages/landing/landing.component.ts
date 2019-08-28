import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router, private apiservice:ApiService) {



   }

  ngOnInit() {

    this.apiservice.checkAuthEnabled().subscribe((res:any)=>{
      if (res.enabled==true){
        this.router.navigate(['/login'])
      }
    })
      
  }

}
