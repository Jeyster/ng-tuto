import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-mataille',
  template: `<div>
    <button (click)="dec()" title="plus petit"> - </button>
    <button (click)="inc()" title="plus grand"> + </button>
    <label [style.font-size.px]="taille">
      FontSize: {{taille}}px</label>
  </div>`,
  styleUrls: ['./mataille.component.css']
})
export class MatailleComponent {

  @Input() taille: number;
  @Output() tailleChange = new EventEmitter();

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.taille += delta;
    this.tailleChange.emit(this.taille);
  }

}
