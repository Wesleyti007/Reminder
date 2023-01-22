import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ShowReminderComponent } from './reminder/show-reminder/show-reminder.component';
import { AddEditReminderComponent } from './reminder/add-edit-reminder/add-edit-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    ShowReminderComponent,
    AddEditReminderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
