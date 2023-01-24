import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderApiService {

  readonly reminderApiUrl = "https://localhost:7191/api";

  constructor(private http:HttpClient) { }

  //Reminders
  getReminderList():Observable<any[]>{
    return this.http.get<any>(this.reminderApiUrl + '/Reminders'); 
  }

  addReminder(data:any){
    return this.http.post(this.reminderApiUrl + '/Reminders', data)
  }

  updateReminder(id:number|string, data:any){
    return this.http.put(this.reminderApiUrl + `/Reminders/${id}` , data);
  }

  deleteReminder(id:number|string){
    return this.http.delete(this.reminderApiUrl + `/Reminders/${id}`);
  }

  //ReminderType
  getReminderTypeList():Observable<any[]>{
    return this.http.get<any>(this.reminderApiUrl + '/ReminderTypes');
  }

  addReminderType(data:any){
    return this.http.post(this.reminderApiUrl + '/ReminderTypes', data)
  }

  updateReminderType(id:number|string, data:any){
    return this.http.put(this.reminderApiUrl + `/ReminderTypes/${id}` , data);
  }

  deleteReminderType(id:number|string){
    return this.http.delete(this.reminderApiUrl + `/ReminderType/${id}`);
  }
  

  //Status
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.reminderApiUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.reminderApiUrl + '/status', data)
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.reminderApiUrl + `/status/${id}` , data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.reminderApiUrl + `/status/${id}`);
  }

}
 
