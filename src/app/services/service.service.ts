import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 

    

  }

  /**
   * addUser
   */
  public addUser(user:any) {
    return this.http.post(`${base_url}/api/register`,user)
  }
}
