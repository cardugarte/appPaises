import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ViewCountryComponent } from './country/pages/view-country/view-country.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';
import { ForCountryComponent } from './country/pages/for-country/for-country.component';

const routes: Routes = [
  {
    path: '',
    component: ForCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'capital',
    component: ForCapitalComponent,
  },
  {
    path: 'region',
    component: ForRegionComponent,
  },
  {
    path: 'pais/:id',
    component: ViewCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule {}
