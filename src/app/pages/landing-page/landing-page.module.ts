import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,

    // PrimeNG
    ToolbarModule,
    ButtonModule
  ]
})
export class LandingPageModule { }
