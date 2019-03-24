import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-complet',
  templateUrl: './complet.component.html',
  styleUrls: ['./complet.component.scss'],
  animations: [
    trigger('popup', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0,
        top: '130px'
      })),
      transition('void => *', [
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.15s ease-out')
      ])
    ])
  ]
})
export class CompletComponent implements OnInit {
  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
