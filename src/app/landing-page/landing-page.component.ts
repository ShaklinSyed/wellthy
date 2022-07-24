import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {

  btnStatus: string = "initial";

  constructor(
    public platform: Platform,
    public apiService: ApiServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  // Method to open app/play store links
  goTo(url: string){
    window.open(url)
  }

  // Makes the api call to post the data
  getLink(formDetails: any){

    this.btnStatus ="loading";

    this.apiService.saveData(formDetails.username, formDetails.areacode + formDetails.mobile)
      .subscribe((data: any) => {
        if (data.status){
          this.btnStatus = "success";
          this.router.navigate(['wellthypage']);
        }
      });

  }

}
