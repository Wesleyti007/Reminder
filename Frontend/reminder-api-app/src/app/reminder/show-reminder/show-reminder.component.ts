import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderApiService } from 'src/app/reminder-api.service';

@Component({
  selector: 'app-show-reminder',
  templateUrl: './show-reminder.component.html',
  styleUrls: ['./show-reminder.component.css']
})
export class ShowReminderComponent implements OnInit {

  reminderList$!:Observable<any[]>;
  reminderTypeList$!:Observable<any[]>;
  reminderTypeList:any=[];


  // Map para mostrar a assoiacao entre as tabelas
  reminderTypeMap:Map<number, string> = new Map();

  constructor(private service:ReminderApiService) { }

  ngOnInit(): void {
    this.reminderList$ = this.service.getReminderList();
    this.reminderTypeList$ = this.service.getReminderTypeList();
    this.refreshReminderTypeMap();
  }


  refreshReminderTypeMap(){
    this.service.getReminderTypeList().subscribe(data => {
      this.reminderTypeList = data;

      for(let i = 0; i < data.length; i ++){
        this.reminderTypeMap.set(this.reminderTypeList[i].id, this.reminderTypeList[i].reminderName)
      }
    })
  }

}
