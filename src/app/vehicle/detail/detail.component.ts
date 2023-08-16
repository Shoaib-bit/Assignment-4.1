import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from 'src/app/vehicles.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  index : any ;
    constructor(public vehicleData : VehiclesService,
                private activateRoute : ActivatedRoute){
                  this.activateRoute.paramMap.subscribe((dta) => {
                    this.index = dta.get('id');

                  })
    }
   

}
