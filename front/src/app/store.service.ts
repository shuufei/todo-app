import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  readonly SOCKET_KEY = 'message';

  stateSubject: Subject<State>;
  state$: Observable<State>;
  state: State;

  socket;

  constructor() {
    this.stateSubject = new Subject();
    this.state$ = this.stateSubject.asObservable();
    this.state = {
      todos: []
    };
    this.connect();

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
    this.sendTodos();
    this.commit();
  }

  doneTodo(id: string, done: boolean) {
    const todo = this.state.todos.find(t => t.id === id);
    todo.done = done;
    const assign = window.localStorage.getItem('name');
    const color = window.localStorage.getItem('color');
    todo.assign = assign;
    todo.color = color;
    this.sendTodos();
    this.commit();
  }

  sendTodos() {
    this.sendMessage(JSON.stringify({todos: this.state.todos}));
  }

  sendMessage(msg: string) {
    this.socket.emit(this.SOCKET_KEY, msg);
  }

  setTodos(todos: Todo[]) {
    this.state.todos = todos;
    this.commit();
  }

  connect() {
    this.socket = io('ws://54.213.172.232:7000');
    this.socket.on(this.SOCKET_KEY, (data) => {
      try {
        const d = JSON.parse(data);
        const todos = d.todos;
        if (todos) {
          this.setTodos(todos);
        }
      } catch (error) {
      }
    });
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
