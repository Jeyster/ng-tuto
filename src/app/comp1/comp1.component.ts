import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `{{monAdresse.street}}`,
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  @Input() monAdresse: any;

  constructor() { }

  ngOnInit() {
  }

}
