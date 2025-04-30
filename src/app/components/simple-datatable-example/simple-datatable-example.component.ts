import { Component } from '@angular/core';
import { SimpleDatatableComponent } from 'src/app/components/simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-simple-datatable-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;
}