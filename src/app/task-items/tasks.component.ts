import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private task: TaskService) {

   }

  ngOnInit() {
    this.task.getTasks().subscribe(tasks => {
      this.tasks = tasks
    })
  }

}
