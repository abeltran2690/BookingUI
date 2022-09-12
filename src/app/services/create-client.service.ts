import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { createClientDTO } from '../interfaces/booking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class createClientService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'client';

  public create(client: createClientDTO){
    return this.http.post(this.apiURL, client)
  }


}
