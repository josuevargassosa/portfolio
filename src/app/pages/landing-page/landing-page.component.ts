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
      },
      {
        logo: '../../../assets/img/htmlLogo.png',
        name: 'Html',
      },
      {
        logo: '../../../assets/img/cssLogo.png',
        name: 'Css',
      },
      {
        logo: '../../../assets/img/gitLogo.png',
        name: 'Git',
      },
      {
        logo: '../../../assets/img/flutterLogo.png',
        name: 'Flutter',
      },
      {
        logo: '../../../assets/img/sqlServerLogo.png',
        name: 'Sql server',
      },
      {
        logo: '../../../assets/img/nodejsLogo.png',
        name: 'NodeJS',
      },
      {
        logo: '../../../assets/img/nestjsLogo.png',
        name: 'NestJS',
      },
    ]
  }

}
