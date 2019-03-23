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
    todos.push(todo);
    this.commit();
  }
}

export interface State {
  todos: Todo[];
}

export interface Todo {
  task: string;
  done: boolean;
}
