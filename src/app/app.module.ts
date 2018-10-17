import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { TaskService } from './services/task.service';
import { TasksComponent } from './task-items/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    TaskService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
