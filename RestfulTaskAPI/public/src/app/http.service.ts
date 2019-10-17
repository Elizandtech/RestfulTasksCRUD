import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {  }
  getTasks() {
    return this.http.get('/tasks');
    // let tempObservable = this._http.get('/tasks'); // HttpClient returns observables from HTTP method calls.
    // tempObservable.subscribe(data => console.log('Got all tasks!', data));
  }
  postToServer(num): any {  // data that's posted must be an object.
    return this.http.post('/tasks', num);
  }
  addTask(newtask): any {
    return this.http.post('/tasks', newtask);
  }
  editTask(editTask): any {
    return this.http.put('/tasks/' + editTask._id, editTask);
  }
  deleteTask(id): any {
    return this.http.delete('/tasks/' + id);
  }
}
