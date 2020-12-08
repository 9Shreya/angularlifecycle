import {EmployeeModule} from './employee/employee.module';
import {AgmCoreModule} from '@agm/core';
import {GooglemapModule} from './googlemap/googlemap.module';
import {WebCameraModule} from './web-camera/web-camera.module';
import {QrcodescannerModule} from './qrcodescanner/qrcodescanner.module';
import {KeepModule} from './keep/keep.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimplechangeComponent} from './lifcycle/ngChang/simplechange/simplechange.component';
import {ParentComponent} from './lifcycle/ngChang/parent/parent.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RootingComponent} from './rooting/rooting.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {CameraComponent} from './webCamera/camera/camera.component';
import {HotelModule} from './hotel/hotel.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage'
import {AllService} from './services/all.service';
@NgModule({
  declarations: [
    AppComponent,
    SimplechangeComponent,
    ParentComponent,
    RootingComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    KeepModule,
    HttpClientModule,
    MaterialModule,
    ZXingScannerModule,
    QrcodescannerModule,
    WebCameraModule,
    GooglemapModule,
    ReactiveFormsModule,
    EmployeeModule,
    HotelModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1Vsb9f9-W50hnCgd1U-wLWAyphYFVyhA',

    }),
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    AngularFireStorageModule
  ],
  providers: [AllService],
  bootstrap: [AppComponent]
})
export class AppModule {}
