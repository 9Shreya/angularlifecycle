import {TrashComponent} from './trash/trash.component';
import {ArchiveComponent} from './archive/archive.component';
import {RemainderComponent} from './remainder/remainder.component';
import {PaintComponent} from './paint/paint.component';
import {TakeanoteComponent} from './takeanote/takeanote.component';
import {KeepsComponent} from './keeps/keeps.component';
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {KeepComponent} from './keep.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {
    path: "keep",
    component: KeepComponent,
    children: [
      {
        path: "",
        component: KeepsComponent,
        children: [
          {
            path: "",
            component: TakeanoteComponent,
          },
          {
            path: "paint",
            component: PaintComponent,
          },
          {
            path: "remainder",
            component: RemainderComponent,
          },
          {
            path: "edit",
            component: EditComponent,
          },
          {
            path: "archive",
            component: ArchiveComponent,
          },
          {
            path: "trash",
            component: TrashComponent,
          },
          {
            path: "keep/paint/:obj",
            component: PaintComponent,
          }
        ],
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeepRoutingModule {}
