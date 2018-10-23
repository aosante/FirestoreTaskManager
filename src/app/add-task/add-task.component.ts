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
    description: '',
    completed: false
  };

  completedState: boolean = false;
  completedBtnName: String = 'Completed tasks';

  ngOnInit() {
    this.taskService.completedState.subscribe(
      state => (this.completedState = state)
    );
  }

  onSubmit() {
    // console.log(this.completedState);
    if (this.task.title != '' && this.task.description != '') {
      this.taskService.addTask(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }

  showCompleted() {
    if (
      this.completedState == false &&
      this.completedBtnName == 'Completed tasks'
    ) {
      this.taskService.toggleCompleted(true);
      this.completedBtnName = 'Tasks';
    } else {
      this.taskService.toggleCompleted(false);
      this.completedBtnName = 'Completed tasks';
    }
  }
}
