import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { this.setHttpOptions() }
  userLogedIn
  httpOptions
  setHttpOptions() {

    this.userLogedIn = JSON.parse(localStorage.getItem("userDetails"))
    if (this.userLogedIn != null) {
      // alert(this.userLogedIn.token)
      let headers = new HttpHeaders({
        'Authorization': "Bearer " + this.userLogedIn.token
      })
      // let headers = new HttpHeaders().set("Authorization", this.userLogedIn.token);
      this.httpOptions = {
        headers: headers
      }
    }
    else {
      let headers = new HttpHeaders({
        "Content-Type": "application/json"
      })
      this.httpOptions = {
        headers: headers
      }
    }

  }

  checkAuthEnabled(){
    return this.http.get('http://ciradev.cognicor.com:8090/5d6368556514a5000d5591ba/MultiAgentSystem/meta/auth_enabled')
    .pipe(
      map(response=>{
        return response
      }))
    
  }

  loginSubmit(formdata){
   return this.http.post('http://localhost:4200/5d6368556514a5000d5591ba/MultiAgentSystem/meta/login',formdata)
   .pipe(
     map(response=>{
      //  console.log("from service"+ JSON.stringify(response))
      localStorage.setItem('userDetails',JSON.stringify(response))
      this.setHttpOptions()
       return response
     })
   )
  }


  welcomeMsg(){

    return this.http.get('http://ciradev.cognicor.com:8090/5d6368556514a5000d5591ba/MultiAgentSystem/meta/info')
    .pipe(
      map(res=>{
        return res
      })
    )
  }

  chatSubmit(formdata, chatId) {
    let data = {
      "chat_id": chatId,
      "selectedItem": "",
      "currentTopic": "",
      "currText": formdata.message + "\n",
      "currentStep": "chat",
      "env": "bots",
      "history": "",
      "session": "",
      "session_data": {
        "email": "rahul@cognicor.com"

      },
      "time_zone": "Asia/Calcutta",
      "Date": new Date()

    }
    return this.http.post('http://localhost:4200/5d6368556514a5000d5591ba/MultiAgentSystem/servlet', data, this.httpOptions)
      .pipe(
        map(res => {
          return res
        })
      )

  }

}

