import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() size: string;
  @Input() color: string;
  @Input() weight: string;
  @Input() options: string[];

  readonly DEFAULT = {
    size: 'p-3',
    color: 'black',
    weight: 'regular'
  };

  classes: string[];

  constructor() {
    this.classes = [];
  }

  ngOnInit() {
    this.setStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setStyles();
  }

  setStyles() {
    const size = this.size ? this.size : this.DEFAULT.size;
    const color = this.color ? this.color : this.DEFAULT.color;
    const weight = this.weight ? this.weight : this.DEFAULT.weight;
    const options = this.options ? this.options : [];
    this.classes = [ size, color, weight, ...options ];
  }

}

