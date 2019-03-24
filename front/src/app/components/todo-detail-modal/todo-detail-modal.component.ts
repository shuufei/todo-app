import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Todo } from 'src/app/store.service';

@Component({
  selector: 'app-todo-detail-modal',
  templateUrl: './todo-detail-modal.component.html',
  styleUrls: [
    './todo-detail-modal.component.scss',
    '../../app.component.scss',
    '../input-text-modal/input-text-modal.component.scss',
    '../todo/todo.component.scss'
  ],
  animations: [
    trigger('detailModal', [
      state('*', style({
        bottom: 0
      })),
      state('void', style({
        bottom: '-300px'
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.25s ease-out')
      ])
    ])
  ]
})
export class TodoDetailModalComponent implements OnInit, OnChanges {
  @Input() open: boolean;
  @Input() todo: Todo;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open && changes.open.currentValue) {
      setTimeout(() => {
        document.getElementById('task-input-id').focus();
      }, 500);
    }
  }

}
