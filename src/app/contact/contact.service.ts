import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISendMessageRequestModel } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public sendMessage(sendModel: ISendMessageRequestModel): Observable<any> {
    return this.http.post('https://localhost:7239/api/Messaging', sendModel);
  }
}
