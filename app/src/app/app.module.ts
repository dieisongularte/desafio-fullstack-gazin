import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { NotificationService } from './services/notification.service';
import { RequestService } from './services/request.service';
import { LoadingService } from './services/loading.service';
import { SideBarService } from './services/side-bar.service';
import { BrDatePipe } from './pipes/br-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    LoadingService,
    NotificationService,
    RequestService,
    SideBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
