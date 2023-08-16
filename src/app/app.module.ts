import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'vehicle',
        loadChildren : () => import ('./vehicle/vehicle.module')
        .then((mod) => mod.VehicleModule)
      },
      {
        path : 'category',
        loadChildren : () => import ('./category/category.module')
        .then((mod) => mod.CategoryModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
