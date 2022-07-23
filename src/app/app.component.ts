import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'wellthy';

  constructor(
    public platform: Platform
  ){

  }

  // Method to open app/play store links
  goTo(url: string){
    window.open(url)
  }

  getLink(formDetails: NgForm){

    console.log(formDetails);
    console.log("form submitted");
  }
}
