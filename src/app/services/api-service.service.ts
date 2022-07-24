import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = "https:shaklin-mailer.herokuapp.com/mail?";

  constructor(
    public httpClient: HttpClient
  ) { }

  saveData(username: string, mobile: string){
    return this.httpClient.get(this.url + "username=" + username +"&mobile=" + mobile);
  }
}
