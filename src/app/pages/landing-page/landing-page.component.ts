import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './landing-page.component.html',
  styleUrls: [
    './landing-page.component.scss',
    './landing-movil-page.component.scss',
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  knowledges: any = [];
  themeSelection: boolean = true;

  user!: any;
  menus!: any;

  constructor(private translate: TranslateService) {
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngAfterViewInit() {
    //this.animationName();
    this.animationTitle();
  }

  animationName() {
    const dataName = 'Josue Vargas';

    function typeWriter(text: any, i: any, fnCallback: any) {
      if (i < text.length) {
        const name = document.getElementById('pageName'); // O puedes usar un selector Angular más específico.
        if (name) {
          name.innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        }

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 200);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation() {
      typeWriter(dataName, 0, function () {
        setTimeout(function () {
          startTextAnimation();
        }, 2000);
      });
    }

    startTextAnimation();
  }

  animationTitle() {
    const dataTitle = 'Desarrollador Front-End';

    function typeWriter(text: any, i: any, fnCallback: any) {
      if (i < text.length) {
        const name = document.querySelector('h1'); // O puedes usar un selector Angular más específico.
        if (name) {
          name.innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        }

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 200);
      } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }

    function startTextAnimation() {
      typeWriter(dataTitle, 0, function () {
        setTimeout(function () {
          startTextAnimation();
        }, 2000);
      });
    }

    startTextAnimation();
  }

  ngOnInit() {
    this.menus = this.translate.instant('menu');

    // asynchronous - gets translations then completes.
    this.translate.get(['menu']).subscribe((translations) => {
      this.menus = translations.menu;
    });

    console.log('OPCIONES', this.menus);

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
    console.log('CAMBIO DE TEMA');
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
