import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  knowledges:any = []

  constructor() {}

  ngOnInit() {
    this.knowledges = [
      {
        logo: '../../../assets/img/angularLogo.png',
        name: 'Angular',
      },

      {
        logo: '../../../assets/img/typescriptLogo.png',
        name: 'Typescript',
      },
      {
        logo: '../../../assets/img/javascriptLogo.png',
        name: 'Javascript',
      },
      {
        logo: '../../../assets/img/ionicLogo.png',
        name: 'Ionic',
      }
    ]
  }

}
