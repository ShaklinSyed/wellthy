import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

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
}
