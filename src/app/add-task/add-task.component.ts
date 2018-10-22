import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  task: Task = {
    title: '',
    description: ''
  };

  test: boolean;

  ngOnInit() {}

  onSubmit() {
    if (this.task.title != '' && this.task.description != '') {
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }
}
