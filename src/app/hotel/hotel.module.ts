import {MaterialModule} from './../material/material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HotelRoutingModule} from './hotel-routing.module';
import {HotelComponent} from './hotel.component';
import {HomeComponent} from './home/home.component';
import {SginupComponent} from './sginup/sginup.component';
import {FormsModule} from '@angular/forms';
import {MarioComponent} from './mario/mario.component';
import {TajmComponent} from './tajm/tajm.component';
import {PreComponent} from './pre/pre.component';
import {KiraComponent} from './kira/kira.component';
import {NovoComponent} from './novo/novo.component';
import {RadiComponent} from './radi/radi.component';
import {GradComponent} from './grad/grad.component';
import {RosComponent} from './ros/ros.component';
import {AdminsginupComponent} from './adminsginup/adminsginup.component';
import {EditlaComponent} from './editla/editla.component';
import {CostoComponent} from './costo/costo.component';


@NgModule({
  declarations: [HotelComponent,HomeComponent,SginupComponent,MarioComponent,TajmComponent,PreComponent,KiraComponent,NovoComponent,RadiComponent,GradComponent,RosComponent,AdminsginupComponent,EditlaComponent,CostoComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,FormsModule
  ]
})
export class HotelModule {}
