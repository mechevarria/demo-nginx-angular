import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app.routes';
import {CardModule, EmptyStateModule, TableModule, NotificationModule, NavigationModule, NotificationService} from 'patternfly-ng';
import {BsDropdownModule} from 'ngx-bootstrap';
import {CardComponent} from './card/card.component';
import {TableComponent} from './table/table.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {McBreadcrumbsModule} from 'ngx-breadcrumbs';
import {MessageService} from './common/message.service';
import {CommentService} from './table/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    McBreadcrumbsModule.forRoot(),
    NotificationModule,
    EmptyStateModule,
    TableModule,
    CardModule,
    NavigationModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    MessageService,
    CommentService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
