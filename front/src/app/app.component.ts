import { Component, OnInit } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { StoreService, Todo, State } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'todo';
  todos: Todo[];

  constructor(private ss: StoreService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.ss.state$.subscribe(state => {
      console.log('-- change state: ', state);
      this.todos = state.todos.filter(t => !t.done);
    });

    // for debug
    const todos: Todo[] = [
      { id: uuidv4(), task: '牛乳を買う', done: false },
      { id: uuidv4(), task: '防カビくんやる', done: false },
      { id: uuidv4(), task: 'トイレ掃除', done: false }
    ];
    todos.forEach(t => this.pushTodo(t));
  }

  pushTodo(todo: Todo) {
    if (!todo) {
      todo = { id: uuidv4(), task: 'dummy task', done: false };
    }
    this.ss.addTodo(todo);
  }
}
