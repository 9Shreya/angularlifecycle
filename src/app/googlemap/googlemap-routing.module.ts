import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooglemapComponent } from './googlemap.component';

const routes: Routes = [
  {
    path: 'maps', component: GooglemapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GooglemapRoutingModule { }
