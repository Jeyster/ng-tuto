import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person: string = 'John Doe';
  age: number = 30;
  address: any = {street: 'rue du Paradis', city: '75010 Paris'};
  alignement: string = 'right';
  couleur: string = 'red';
  compteur: any = 'N/A';
  maTaille: number = 10;
  modifierPersonne() {
    this.person = 'Another man';
  }
  myValueChange(event) {
    this.compteur = event.value;
  }
}
