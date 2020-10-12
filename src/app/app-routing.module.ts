import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarContainerComponent } from './components/car-container/car-container.component';
const routes: Routes = [
  { path: 'car/:id', component: CarHomeComponent },
  { path: '**', component: CarContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
