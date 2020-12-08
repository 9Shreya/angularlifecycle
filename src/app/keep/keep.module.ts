import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeepRoutingModule } from './keep-routing.module';
import { KeepComponent } from './keep.component';
import { ArchiveComponent } from './archive/archive.component';
import { KeepsComponent } from './keeps/keeps.component';
import { PaintComponent } from './paint/paint.component';
import { RemainderComponent } from './remainder/remainder.component';
import { TakeanoteComponent } from './takeanote/takeanote.component';
import { TrashComponent } from './trash/trash.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [KeepComponent, ArchiveComponent, KeepsComponent, PaintComponent, RemainderComponent, TakeanoteComponent, TrashComponent, EditComponent],
  imports: [
        CommonModule,
    KeepRoutingModule, BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ]
})
export class KeepModule { }
