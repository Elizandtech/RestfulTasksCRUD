import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import { format } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'WELCOME TO MEAN STACK ANGULAR';
  tasks: any;
  details: any;
  newTask: any;
  editTask: any;

  constructor(private httpService: HttpService) {}  // for dependency injection only. Other stuff goes into OnInit.

  ngOnInit() {   // make HTTP request OnInit( immediately after constructor runs).
    this.getTasksFromService();
    // this.num = 7;
    // this.randNum = Math.floor((Math.random() *2) +1);
    // this.str = 'Angular is fun - NOT!';
    // this.snacks = ['crackers', 'cookies', 'mango', 'dried fruit'];
    // this.loggedIn = true;
    this.newTask = {title: "", description: ""};
  }
  getTasksFromService(): void {
    // invoke the getTasks method from the service.ts file
    this.httpService.getTasks()
    .subscribe((data: any) => {
      console.log('Data from getTasksFromService()!', data);
      // for (let i =0; i<data.length;i++){
      //   console.log('Task title:', data[i].title);
      // }
      this.tasks = data;
      console.log('this.tasks: ', this.tasks);
    });
  }
  showDetails(task: any): void{
    console.log('in showDetails');
    console.log('task', task);
    this.details = task;
    console.log('this.details', this.details);
  }

  onSubmit(): void {
      // Code to send off the form data (this.newTask) to the Service
      console.log('onSubmit is working!');
      this.httpService.addTask(this.newTask)  // bundle the data, num, in an object
      .subscribe((newdata: any) => {
        console.log('Got our data', newdata);
      });
      // Reset this.newTask to a new, clean object.
      this.newTask = { title: "", description: "" };
      this.getTasksFromService();
  }
  onDetails(task: any): void {
    console.log('in onDetails');
    console.log('task', task);
    this.editTask = task;
    console.log('this.editTask', this.editTask);
  }
  onEditTask(): void {
    console.log('IN onEditTask', this.editTask);
    this.httpService.editTask(this.editTask)  // should return edited task
    .subscribe((editdata: any) => {
      console.log('Got our data', editdata);
    });
  }
  onDelete(id: any): void {
    this.httpService.deleteTask(id)
    .subscribe(data => {
      console.log('deleted', data);
      this.getTasksFromService();
    });
   }
}








  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  //   let observableData = this._httpService.postToServer({data:num});  // bundle the data, num, in an object
  //   observableData.subscribe((data:any) => {
  //     console.log('Got our data', data);
  //   });
  // }
  
  // onButtonClickEvent(event:any): void {
  //   event.preventDefault();
  //   console.log(`Click event is working with an event: ${event}`);
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
