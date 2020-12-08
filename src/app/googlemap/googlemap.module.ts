import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglemapRoutingModule } from './googlemap-routing.module';
import { GooglemapComponent } from './googlemap.component';


@NgModule({
  declarations: [GooglemapComponent],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1Vsb9f9-W50hnCgd1U-wLWAyphYFVyhA',

    }),
  ]
})
export class GooglemapModule { }
