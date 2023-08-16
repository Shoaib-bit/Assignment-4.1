import { Component } from '@angular/core';
import { VehicleModule } from '../vehicle.module';
import { VehiclesService } from 'src/app/vehicles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public vehicleList : VehiclesService) {}
}
