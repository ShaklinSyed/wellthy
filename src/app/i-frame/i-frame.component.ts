import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-frame',
  templateUrl: './i-frame.component.html',
  styleUrls: ['./i-frame.component.scss']
})

export class IFrameComponent implements OnInit {

  sourceUrl = "https://www.wellthytherapeutics.com";

  constructor() { }

  ngOnInit(): void {
  }

}