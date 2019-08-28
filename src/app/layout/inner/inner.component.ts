import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.scss']
})
export class InnerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    if (localStorage.getItem('userDetails')==null){
this.router.navigate(['/login'])

    }
  }

}
