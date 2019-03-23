import { Component, OnInit } from '@angular/core';

import { StoreService, Todo } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';

  constructor(private ss: StoreService) {
  }

  ngOnInit(): void {
    this.ss.state$.subscribe(state => {
      console.log('-- change state: ', state);
    });
  }

  pushTodo() {
    const todo: Todo = {
      task: 'hoge',
      done: false
    };
    this.ss.addTodo(todo);
  }
}
