import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as uuidv4 from 'uuid/v4';

import { StoreService, Todo } from '../../store.service';

@Component({
  selector: 'app-input-text-modal',
  templateUrl: './input-text-modal.component.html',
  styleUrls: ['./input-text-modal.component.scss']
})
export class InputTextModalComponent implements OnInit {
  @Input() mode: 'task' | 'name';
  @Output() changeName = new EventEmitter();

  readonly MODE = {
    task: {
      title: 'タスクを登録',
      placeholder: 'タスク',
      buttonLabel: '登録',
      action: this.addTodo.bind(this)
    },
    name: {
      title: 'アカウント名を入力してください',
      placeholder: 'アカウント名',
      buttonLabel: '決定',
      action: this.registName.bind(this)
    }
  };

  currentMode;
  text: string;

  constructor(private ss: StoreService) {
  }

  ngOnInit() {
    this.currentMode = this.mode ? this.MODE[this.mode] : this.MODE.task;
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

  registName() {
    this.changeName.emit(this.text);
  }

}
