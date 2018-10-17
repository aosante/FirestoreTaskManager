import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Task } from '../models/tasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCollection: AngularFirestoreCollection<Task>; 
  tasks: Observable<Task[]>;
  
  constructor(public db: AngularFirestore) {
    //this returns the collection as an observable
    this.tasks = this.db.collection('tasks').valueChanges();
   }

   getTasks() {
     return this.tasks;
   }
}
