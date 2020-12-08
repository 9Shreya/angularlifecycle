import {CameraComponent} from './webCamera/camera/camera.component';
import {RootingComponent} from './rooting/rooting.component';
import {ParentComponent} from './lifcycle/ngChang/parent/parent.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


const routes: Routes = [

  {
    path: "",component: RootingComponent
  },
  {
    path: "lifecycle",component: ParentComponent
  },
  {
    path: "hia",component: CameraComponent
  },

  {
    path: 'keeps',loadChildren: () => import('./keep/keep.module').then(m => m.KeepModule)
  },

  {path: 'qr',loadChildren: () => import('./qrcodescanner/qrcodescanner.module').then(m => m.QrcodescannerModule)},

  {path: 'WebCamera',loadChildren: () => import('./web-camera/web-camera.module').then(m => m.WebCameraModule)},

  {path: 'googlemap',loadChildren: () => import('./googlemap/googlemap.module').then(m => m.GooglemapModule)},

  {path: 'employee',loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},

  {path: 'hotel',loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
