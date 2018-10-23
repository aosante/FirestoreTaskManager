import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Task } from '../models/tasks';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompileTemplateMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;
  private completed = new BehaviorSubject<boolean>(false); //false is the default value
  completedState = this.completed.asObservable();

  constructor(public db: AngularFirestore) {
    this.taskCollection = this.db.collection('tasks', ref =>
      ref.orderBy('title', 'asc')
    );

    //this returns the collection as an observable but doesn't return each item's id
    // this.tasks = this.db.collection('tasks').valueChanges();

    //this returns both the data AND id for each item
    this.tasks = this.taskCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(a => {
          const data = a.payload.doc.data() as Task;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getTasks() {
    return this.tasks;
  } //

  addTask(task: Task) {
    this.taskCollection.add(task);
  }

  deleteTask(task: Task) {
    this.taskDoc = this.db.doc(`tasks/${task.id}`);
    this.taskDoc.delete();
  }

  updateTask(task: Task) {
    this.taskDoc = this.db.doc(`tasks/${task.id}`);
    this.taskDoc.update(task);
  }

  completeTask(task: Task) {
    this.taskDoc = this.db.doc(`tasks/${task.id}`);
    this.taskDoc.update({ completed: true });
  }

  unCompleteTask(task: Task) {
    this.taskDoc = this.db.doc(`tasks/${task.id}`);
    this.taskDoc.update({ completed: false });
  }

  toggleCompleted(state: boolean) {
    this.completed.next(state);
  }
}
