import {CostoComponent} from './costo/costo.component';
import {EditlaComponent} from './editla/editla.component';
import {AdminsginupComponent} from './adminsginup/adminsginup.component';
import {RosComponent} from './ros/ros.component';
import {GradComponent} from './grad/grad.component';
import {RadiComponent} from './radi/radi.component';
import {NovoComponent} from './novo/novo.component';
import {KiraComponent} from './kira/kira.component';
import {PreComponent} from './pre/pre.component';
import {TajmComponent} from './tajm/tajm.component';
import {MarioComponent} from './mario/mario.component';
import {SginupComponent} from './sginup/sginup.component';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HotelComponent} from './hotel.component';

const routes: Routes = [
  {
    path: '',component: HotelComponent,
    children: [
      {
        path: "",component: HomeComponent
      },
      {
        path: 'sginUp',component: SginupComponent,

      },
      {
        path: 'karnataka/marriot',component: MarioComponent,

      },
      //routing of madhya pradesh
      {
        path: 'madhya-pradesh/taj',component: TajmComponent,

      },
      //routing for uttrakhanad
      {
        path: 'utrakhand/prestige',component: PreComponent,

      },
      //routing of  kashmir
      {
        path: 'kashmir/usha-kiran',component: KiraComponent,

      },
      //routing of himacha pradesh
      {
        path: 'himachal-pradesh/novotel',component: NovoComponent,

      },
      //routing of maharastra
      {
        path: 'maharastra/radisson-mumbai',component: RadiComponent,

      },
      //routing of kerala
      {
        path: 'kerala/grand-hyatt',component: GradComponent,

      },

      {
        path: 'admin',
        children: [
          {
            path: '',
            component: RosComponent,
          },
          {
            path: 'admin-signup',
            children: [
              {
                path: '',
                component: AdminsginupComponent,
              },
              {
                path: 'Edit',
                component: EditlaComponent,
              },
              {
                path: 'coustomers',
                component: CostoComponent,
              },
            ],
          },
        ],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {}
