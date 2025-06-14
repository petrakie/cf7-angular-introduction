import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson |undefined;

  name = "Thanasis"
  addressOReducation: string = '';

  person = {
    givenName:"Thanasis",
    surName: "Androutsos",
    age: 20,
    email:'thanasis@aueb.gr'
  }
  isPerson():boolean {
    return this.person && 'address' in this.person;
  }
  isEPerson():boolean {
    return this.person && 'education' in this.person;
 }
}