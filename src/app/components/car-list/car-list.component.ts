import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CarAPIService } from '../../core/services/car.service';
import { Car } from '../../core/models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: 'car-list.component.html',
  styleUrls: ['car-list.component.scss'],
})
export class CarListComponent {
  @Input() quarter: number;
  @Input() year: number;
  expand = false;
  isLoading = false;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  carlist: Car[] = [];

  constructor(private carService: CarAPIService) {}

  toggleContent() {
    this.expand = !this.expand;
    if (this.carlist.length == 0 && this.expand) {
      this.isLoading = true;
      this.loadListByQuarter();
    }
  }

  private loadListByQuarter() {
    this.carService.getListOfByQuarter(this.year, this.quarter).subscribe(
      (res) => {
        this.carlist = res;
        this.isLoading = false;
      },
      (err) => {
        this.carlist = [];
        this.isLoading = false;
      }
    );
  }
}
