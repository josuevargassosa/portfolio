import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-movil-page.component.scss',
  ],
})
export class LandingPageComponent implements OnInit {
  knowledges: any = [];
  themeSelection: boolean = true;

  user!: any;
  menus!: any;

  constructor(private translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit() {
    this.menus = this.translate.instant('menu');

    // asynchronous - gets translations then completes.
    this.translate.get(['menu']).subscribe((translations) => {
      this.menus = translations.menu;
    });

    this.themeDark();
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
    ];
  }

  changeTheme(state: boolean) {
    this.themeSelection = state;
    state ? this.themeDark() : this.themeLight();
  }
  themeDark() {
    document.getElementById('page')!.classList.add('dark-mode');
    document.getElementById('page')!.classList.remove('light-mode');
  }

  themeLight() {
    document.getElementById('page')!.classList.remove('dark-mode');
    document.getElementById('page')!.classList.add('light-mode');
  }

  changeLang(language: string) {
    if (language === 'en') {
      this.translate.use('en');
    } else {
      this.translate.use('es');
    }
  }
}
