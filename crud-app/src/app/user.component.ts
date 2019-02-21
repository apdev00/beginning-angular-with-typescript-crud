import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'users',
  templateUrl: './user.component.html'
})

export class UserComponent {
  users;

  constructor(private db: AngularFireDatabase){
  }

  ngOnInit(){
    this.users = this.db.list('/');
  }
}
