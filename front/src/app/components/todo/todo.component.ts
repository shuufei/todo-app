import { Component, OnInit, Input } from '@angular/core';

import { StoreService, Todo } from 'src/app/store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  readonly DONE_ANIMATION_DURATION = 450;

  done: boolean;

  constructor(private ss: StoreService) {
    this.done = false;
  }

  ngOnInit() {
    this.done = this.todo.done;
  }

  changeDone(event) {
    event.preventDefault();
    event.stopPropagation();
    // this.done = this.todo.done;
    this.done = !this.done;
    if (this.done) {
      setTimeout(() => {
        this.ss.doneTodo(this.todo.id, this.done);
      }, this.DONE_ANIMATION_DURATION + 100);
    } else {
      this.ss.doneTodo(this.todo.id, this.done);
    }
  }
}
