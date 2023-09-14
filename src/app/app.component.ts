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

  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeTheme(state: boolean) {
    console.log(state);
    state ? this.themeDark() : this.themeLight();
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
