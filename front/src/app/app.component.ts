import { Component, OnInit } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { StoreService, Todo, State } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly COLOR = [
    '#F2994A', '#27AE60', '#FDCA40'
  ];

  title = 'todo';
  todos: Todo[];
  initialized: boolean;
  typing: boolean;
  editTarget: Todo;
  completeDialogShow: boolean;

  constructor(private ss: StoreService) {
    this.todos = [];
    this.initialized = false;
    const name = window.localStorage.getItem('name');
    this.initialized = name ? true : false;
    this.typing = false;
    this.editTarget = null;
    this.completeDialogShow = false;
    setInterval(() => {
      this.typing = (window.innerHeight < 390);
    }, 100);
  }

  ngOnInit(): void {
    this.ss.state$.subscribe(state => {
      console.log('-- change state: ', state);
      this.todos = state.todos.filter(t => !t.done);
    });

    // // for debug
    // const todos: Todo[] = [
    //   { id: uuidv4(), task: '牛乳を買う', done: false },
    //   { id: uuidv4(), task: '防カビくんやる', done: false },
    //   { id: uuidv4(), task: 'トイレ掃除', done: false }
    // ];
    // todos.forEach(t => this.pushTodo(t));
  }

  pushTodo(todo: Todo) {
    if (!todo) {
      todo = { id: uuidv4(), task: 'dummy task', done: false };
    }
    this.ss.addTodo(todo);
  }

  changeName(name: string) {
    if (name) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('color', this.COLOR[Math.floor(Math.random() * (this.COLOR.length - 0) + 0)]);
      this.initialized = true;
      this.completeDialogShow = true;
      setTimeout(() => {
        this.completeDialogShow = false;
      }, 2000);
    }
  }

  showDetail(todo: Todo) {
    this.editTarget = todo;
  }

  closeDetail() {
    this.editTarget = null;
  }
}
