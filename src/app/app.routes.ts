import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TableComponent} from './table/table.component';
import {ChartsComponent} from './charts/charts.component';
import {FormComponent} from './form/form.component';
import { AppMapComponent } from './app-map/app-map.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'charts',
        component: ChartsComponent,
        data: {
          breadcrumb: 'Charts'
        }
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          breadcrumb: 'Table'
        }
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          breadcrumb: 'Form'
        }
      },
      {
        path: 'map',
        component: AppMapComponent,
        data: {
          breadcrumb: 'Map'
        }
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
