import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Task } from '../models/tasks';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCollection: AngularFirestoreCollection<Task>; 
  tasks: Observable<Task[]>;
  
  constructor(public db: AngularFirestore) {
    //this returns the collection as an observable
    // this.tasks = this.db.collection('tasks').valueChanges();
    this.tasks = this.db.collection('tasks').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

   getTasks() {
     return this.tasks;
   }
}
