import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderApiService } from 'src/app/reminder-api.service';

@Component({
  selector: 'app-add-edit-reminder',
  templateUrl: './add-edit-reminder.component.html',
  styleUrls: ['./add-edit-reminder.component.css']
})
export class AddEditReminderComponent implements OnInit {

  reminderList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  reminderTypeList$!: Observable<any[]>;


  constructor(private service: ReminderApiService) { }

  @Input() reminder: any;
  id: number = 0;
  status: string = "";
  coments: string = "";
  reminderTypeId!: number;

  ngOnInit(): void {
    this.id = this.reminder.id;
    this.status = this.reminder.status;
    this.coments = this.reminder.coments;
    this.reminderTypeId = this.reminder.reminderTypeId;

    this.statusList$ = this.service.getStatusList();
    this.reminderTypeList$ = this.service.getReminderTypeList();
    this.reminderList$ = this.service.getReminderList();
  }

  newReminder() {
    var reminder = {
      status: this.status,
      coments: this.coments,
      reminderTypeId: this.reminderTypeId
    }

    this.service.addReminder(reminder).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close')
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert')
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }

      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateReminder() {

  }

}
