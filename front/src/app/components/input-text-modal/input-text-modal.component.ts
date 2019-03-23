import { Component, OnInit } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { StoreService, Todo } from '../../store.service';

@Component({
  selector: 'app-input-text-modal',
  templateUrl: './input-text-modal.component.html',
  styleUrls: ['./input-text-modal.component.scss']
})
export class InputTextModalComponent implements OnInit {

  text: string;

  constructor(private ss: StoreService) {
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.text) {
      const todo: Todo = {
        id: uuidv4(),
        task: this.text,
        done: false
      };
      this.ss.addTodo(todo);
      this.text = null;
    }
  }

}
