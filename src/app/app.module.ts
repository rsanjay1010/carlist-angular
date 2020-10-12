import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarAPIService } from './core/services/car.service';

import { CarCardComponent } from './components/car/car-card.component';
import { CarContainerComponent } from './components/car-container/car-container.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarListComponent } from './components/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarContainerComponent,
    CarHomeComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [CarAPIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
