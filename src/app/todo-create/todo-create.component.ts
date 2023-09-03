import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {
  //property
  newTodo = 'No Content';

  
  //method
  onCreate() {
    this.newTodo = 'New Todo Baby'
  }
}
