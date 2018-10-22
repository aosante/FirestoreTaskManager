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
  editState: boolean = false;
  taskEdit: Task;
  completedState: boolean = false;

  constructor(private task: TaskService) {

   }

  ngOnInit() {
    this.task.getTasks().subscribe(tasks => {
      this.tasks = tasks
    });
  }

  deleteTask(e, task: Task) {
    this.clearState();
    this.task.deleteTask(task);
  }

  editTask(e, item: Task) { 
    this.editState = true;
    this.taskEdit = item;

  }

  updateTask(task: Task) {
    this.task.updateTask(task);
    this.clearState();

  }

  clearState() {
    this.editState = false;
    this.taskEdit = null;
  }

}
