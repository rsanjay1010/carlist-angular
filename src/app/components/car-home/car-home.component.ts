import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarAPIService } from '../../core/services/car.service';
import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-car-home',
  templateUrl: 'car-home.component.html',
})
export class CarHomeComponent {
  isLoading = false;
  data: Car = null;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private carService: CarAPIService
  ) {}

  ngOnInit() {
    const index = this.route.snapshot.paramMap.get('id');
    this.loadCarDetails(index);
  }

  private loadCarDetails(index) {
    this.carService.getCarDetails(index).subscribe(
      (res) => {
        this.data = res;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
}
