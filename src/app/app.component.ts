import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Evangelia';

  person = {
    givenName: 'Evangelia',
    surName: 'Petraki',
    age: 29,
    email: "petrakie@icloud.com"
  }
}
