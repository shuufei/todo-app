import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';

import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  readonly SOCKET_KEY = 'message';

  stateSubject: Subject<State>;
  state$: Observable<State>;
  state: State;

  socket;

  constructor(private http: HttpClient) {
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
    this.notifyToLine(todo, '追加');
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
    this.notifyToLine(todo, '完了');
  }

  sendTodos() {
    // this.sendMessage(JSON.stringify({todos: this.state.todos}));
  }

  sendMessage(msg: string) {
    // this.socket.emit(this.SOCKET_KEY, msg);
  }

  setTodos(todos: Todo[]) {
    this.state.todos = todos;
    this.commit();
  }

  connect() {
    // this.socket = io('ws://54.213.172.232:7000');
    // this.socket.on(this.SOCKET_KEY, (data) => {
    //   try {
    //     const d = JSON.parse(data);
    //     const todos = d.todos;
    //     if (todos) {
    //       this.setTodos(todos);
    //     }
    //   } catch (error) {
    //   }
    // });
  }

  /** POST: add a new hero to the database */
  notifyToLine(todo: Todo, action: string): void {
    // console.log(todo);

    // const assginedName = todo.assign;
    // const taskName = todo.task;

    // const url =
    // 'https://maker.ifttt.com/trigger/ore_no_todo_event/with/key/cSLKN7Ndi0gf10vGsDT7A6?' +
    // `value1=${assginedName}&value2=${taskName}&value3=${action}`;
    // console.log(url);

    // const httpObj = this.http.get(url)
    //   .subscribe(response => {
    //     console.log('OK');
    //   }, error => {
    //     console.log(error);
    // });
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
