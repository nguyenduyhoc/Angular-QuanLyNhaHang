import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'role', component: RoleComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
