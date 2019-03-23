import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stateSubject: Subject<State>;
  state$: Observable<State>;
  state: State;

  constructor() {
    this.stateSubject = new Subject();
    this.state$ = this.stateSubject.asObservable();
    this.state = {
      todos: []
    };
  }

  commit() {
    this.stateSubject.next(this.state);
  }

  addTodo(todo: Todo) {
    const { todos } = this.state;
    const assign = window.localStorage.getItem('name');
    const color = window.localStorage.getItem('color');
    Object.assign(todo, {assign, color});
    todos.push(todo);
    this.commit();
  }

  doneTodo(id: string, done: boolean) {
    const todo = this.state.todos.find(t => t.id === id);
    todo.done = done;
    const assign = window.localStorage.getItem('name');
    const color = window.localStorage.getItem('color');
    todo.assign = assign;
    todo.color = color;
    this.commit();
  }
}

export interface State {
  todos: Todo[];
}

export interface Todo {
  id: string;
  task: string;
  done: boolean;
  assign?: string;
  color?: string;
}
