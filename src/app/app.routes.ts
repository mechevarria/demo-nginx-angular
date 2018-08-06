import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TableComponent} from './table/table.component';
import {ChartsComponent} from './charts/charts.component';

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
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
