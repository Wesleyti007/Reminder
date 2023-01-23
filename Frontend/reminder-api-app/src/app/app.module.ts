import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ShowReminderComponent } from './reminder/show-reminder/show-reminder.component';
import { AddEditReminderComponent } from './reminder/add-edit-reminder/add-edit-reminder.component';
import { ReminderApiService } from './reminder-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    ShowReminderComponent,
    AddEditReminderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ReminderApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
