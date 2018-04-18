import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CardModule, EmptyStateModule, NavigationModule, NotificationModule, TableModule} from 'patternfly-ng';
import {McBreadcrumbsModule} from 'ngx-breadcrumbs';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './card/card.component';
import {TableComponent} from './table/table.component';
import {NavComponent} from './nav/nav.component';
import {MessageService} from './services/message.service';
import {CommentService} from './services/comment.service';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app-routes';
import {BsDropdownModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    TableComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    McBreadcrumbsModule.forRoot(),
    NavigationModule,
    NotificationModule,
    EmptyStateModule,
    TableModule,
    CardModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    MessageService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
