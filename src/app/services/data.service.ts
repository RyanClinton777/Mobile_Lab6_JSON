import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import this again
import { Observable } from 'rxjs'; //RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { } //add argument, of type HttpClient

  //Create this method
  GetStudentData():Observable<any> {
    return this.http.get('https://www.jsonblob.com/api/jsonblob/bf57c112-5d69-11ea-80ec-cf3046b4e808'); //return the JSON API URL, use http.get()
  }
}
