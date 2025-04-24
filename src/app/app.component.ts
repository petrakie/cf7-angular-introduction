import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Evangelia';

  // Step 1: One way binding of data
  person = {
    givenName: 'Evangelia',
    surName: 'Petraki',
    age: 29,
    email: "petrakie@icloud.com"
  }
  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age: 55,
    email: "chfrag@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@example.com",
    address: "New York, USA"
  }

  users: Person[] = [
    {
      "givenName": "Phil",
      "surName": "Braidman",
      "email": "pbraidman0@biblegateway.com",
      "age": 1,
      "address": "9th Floor"
    }, {
      "givenName": "Felicdad",
      "surName": "Rounsivall",
      "email": "frounsivall1@europa.eu",
      "age": 2,
      "address": "17th Floor"
    }, {
      "givenName": "Vlad",
      "surName": "Hutchison",
      "email": "vhutchison2@eventbrite.com",
      "age": 3,
      "address": "PO Box 66058"
    }, {
      "givenName": "Stavro",
      "surName": "Bearn",
      "email": "sbearn3@forbes.com",
      "age": 4,
      "address": "Suite 7"
    }, {
      "givenName": "Geoffrey",
      "surName": "Dinning",
      "email": "gdinning4@jalbum.net",
      "age": 5,
      "address": "Suite 79"
    }, {
      "givenName": "Farrah",
      "surName": "Cosins",
      "email": "fcosins5@homestead.com",
      "age": 6,
      "address": "7th Floor"
    }, {
      "givenName": "Chic",
      "surName": "Laetham",
      "email": "claetham6@google.ru",
      "age": 7,
      "address": "Apt 1223"
    }, {
      "givenName": "Oriana",
      "surName": "Larn",
      "email": "olarn7@washingtonpost.com",
      "age": 8,
      "address": "Suite 86"
    }, {
      "givenName": "Garek",
      "surName": "Kermott",
      "email": "gkermott8@japanpost.jp",
      "age": 9,
      "address": "PO Box 30123"
    }, {
      "givenName": "Steffie",
      "surName": "Knappitt",
      "email": "sknappitt9@indiatimes.com",
      "age": 10,
      "address": "Suite 2"
    }, {
      "givenName": "Hildagarde",
      "surName": "Allabarton",
      "email": "hallabartona@deviantart.com",
      "age": 11,
      "address": "Apt 1307"
    }, {
      "givenName": "Talia",
      "surName": "Hakes",
      "email": "thakesb@4shared.com",
      "age": 12,
      "address": "PO Box 38454"
    }, {
      "givenName": "Ebonee",
      "surName": "Medlar",
      "email": "emedlarc@hostgator.com",
      "age": 13,
      "address": "Suite 89"
    }, {
      "givenName": "Bridgette",
      "surName": "Randerson",
      "email": "brandersond@facebook.com",
      "age": 14,
      "address": "Apt 1328"
    }, {
      "givenName": "Jae",
      "surName": "Pengilly",
      "email": "jpengillye@typepad.com",
      "age": 15,
      "address": "Room 716"
    }, {
      "givenName": "Roma",
      "surName": "Brocket",
      "email": "rbrocketf@last.fm",
      "age": 16,
      "address": "PO Box 85304"
    }, {
      "givenName": "Bren",
      "surName": "Bozier",
      "email": "bbozierg@addthis.com",
      "age": 17,
      "address": "Apt 909"
    }, {
      "givenName": "Lind",
      "surName": "Ramel",
      "email": "lramelh@imageshack.us",
      "age": 18,
      "address": "PO Box 49721"
    }, {
      "givenName": "Wat",
      "surName": "Gerleit",
      "email": "wgerleiti@bandcamp.com",
      "age": 19,
      "address": "PO Box 94307"
    }, {
      "givenName": "Thelma",
      "surName": "Thormann",
      "email": "tthormannj@indiegogo.com",
      "age": 20,
      "address": "Apt 184"
    }    
  ]
}
