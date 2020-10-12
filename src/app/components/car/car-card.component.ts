import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-car-card',
  styleUrls: ['car-card.component.scss'],
  templateUrl: 'car-card.component.html',
})
export class CarCardComponent implements OnInit {
  @Input() data: Car;
  isRelease = true;

  ngOnInit() {
    let today = new Date();
    let release_date = new Date(this.data.release_date);

    if (today < release_date) {
      this.isRelease = false;
    }
  }
}
