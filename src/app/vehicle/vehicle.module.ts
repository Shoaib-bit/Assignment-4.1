import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path : '',
          component : ListComponent
      },
      {
          path : 'detail/:id',
          component : DetailComponent
      }
    ])
  ]
})
export class VehicleModule { }
