import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimePickerComponent } from './time-picker/time-picker.component'
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsComponent } from './buttons/buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    TimePickerComponent,
    TabsComponent,
    AlertsComponent,
    ButtonsComponent,
    DropdownsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
