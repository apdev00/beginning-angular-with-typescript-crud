import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';

import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: "AIzaSyDiefTsWUCCFZWxud2w8PPdtC2jyL6kQ0w",
  authDomain: "angular4-with-typescript-crud.firebaseapp.com",
  databaseURL: "https://angular4-with-typescript-crud.firebaseio.com",
  projectId: "angular4-with-typescript-crud",
  storageBucket: "angular4-with-typescript-crud.appspot.com",
  messagingSenderId: "329946356547"
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
