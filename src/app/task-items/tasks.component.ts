import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  constructor(private task: TaskService) {

   }

  ngOnInit() {
    this.task.getTasks().subscribe(tasks => {
      console.log(tasks);
    })
  }

}
