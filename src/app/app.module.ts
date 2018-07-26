import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import {CardModule, NotificationService, TableModule, ToastNotificationListModule, VerticalNavigationModule} from 'patternfly-ng';
import {BsDropdownModule} from 'ngx-bootstrap';
import {CardComponent} from './card/card.component';
import {TableComponent} from './table/table.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {BreadcrumbsModule} from '@exalif/ngx-breadcrumbs';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    BreadcrumbsModule.forRoot(),
    VerticalNavigationModule,
    ToastNotificationListModule,
    TableModule,
    CardModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
