import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'josuevargassosa';
  themeSelection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // let theme = window.localStorage.getItem('theme');
    // if (theme) {
    //   this.themeSelection = theme == 'dark' ? true : false;
    //   this.changeTheme(this.themeSelection);
    // }
  }

  changeTheme(state: boolean) {
    // let theme = state ? 'dark' : 'light';
    // window.localStorage.setItem('theme', theme);
    // let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    // themeLink.href = 'lara-' + theme + '-blue' + '.css';
    // console.log('themeLink', themeLink);
    console.log(state);
    state ? this.themeDark() : this.themeLight();

    // if (state == true)  {
    //   console.log('claro');
    //     // document.getElementById('page') as HTMLLinkElement;
    //     // document.getElementById('page')!.classList.remove('dark-mode')
    //     // document.getElementById('page')!.classList.add('light-mode')

    // } {
    //   console.log('oscuro');
    //     // document.getElementById('page')!.classList.add('dark-mode')
    //     // document.getElementById('page')!.classList.remove('light-mode')
    // }
  }

  themeDark() {
    console.log('themeDark');
    document.getElementById('page')!.classList.add('dark-mode');
    document.getElementById('page')!.classList.remove('light-mode');
  }

  themeLight() {
    console.log('themeLight');
    document.getElementById('page')!.classList.remove('dark-mode');
    document.getElementById('page')!.classList.add('light-mode');
  }
}
