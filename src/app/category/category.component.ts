import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  check = true;
  category: any; 
      constructor(public vehicleData : VehiclesService,
                  private activteRoute : ActivatedRoute) {
            this.activteRoute.paramMap.subscribe((dta)=>{
              this.category = dta.get('category');
              console.log(this.category);
              if(this.category != null) {
                this.check = false;
              }
            })
      }

  ngOnInit(): void {
    
  }  


}
