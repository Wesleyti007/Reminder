import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderApiService } from 'src/app/reminder-api.service';

@Component({
  selector: 'app-show-reminder',
  templateUrl: './show-reminder.component.html',
  styleUrls: ['./show-reminder.component.css']
})
export class ShowReminderComponent implements OnInit {

  reminderList$!: Observable<any[]>;
  reminderTypeList$!: Observable<any[]>;
  reminderTypeList: any = [];


  // Map para mostrar a assoiacao entre as tabelas
  reminderTypeMap: Map<number, string> = new Map();

  constructor(private service: ReminderApiService) { }

  ngOnInit(): void {
    this.reminderList$ = this.service.getReminderList();
    this.reminderTypeList$ = this.service.getReminderTypeList();
    this.refreshReminderTypeMap();
  }

  //Variavel (propriedades)
  modalTitle: string = '';
  activateAddEditReminderComponent: boolean = false;
  reminder: any;


  modalAdd() {
    this.reminder = {
      id: 0,
      status: null,
      coments: null,
      reminderTypeId: null
    }
    this.modalTitle = "Nova Tarefa";
    this.activateAddEditReminderComponent = true;
  }

  modalClose() {
    this.activateAddEditReminderComponent = false;
    this.reminderList$ = this.service.getReminderList();
  }

  modalEdit(item:any){
    this.reminder = item;
    this.modalTitle = "Edição de tarefa";
    this.activateAddEditReminderComponent = true;
  }
  
  delete(item:any){

    if(confirm(`Deseja deletar a tarefa ${item.id} ?`)){
    
      this.service.deleteReminder(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close')
        if (closeModalBtn) {
          closeModalBtn.click();
        }
  
        var showdeleteSuccess = document.getElementById('delete-success-alert')
        if (showdeleteSuccess) {
          showdeleteSuccess.style.display = "block";
        }
  
        setTimeout(function () {
          if (showdeleteSuccess) {
            showdeleteSuccess.style.display = "none"
          }
        }, 4000);
      })

    }

    
  }


  refreshReminderTypeMap() {
    this.service.getReminderTypeList().subscribe(data => {
      this.reminderTypeList = data;

      for (let i = 0; i < data.length; i++) {
        this.reminderTypeMap.set(this.reminderTypeList[i].id, this.reminderTypeList[i].reminderName)
      }
    })
  }

}
