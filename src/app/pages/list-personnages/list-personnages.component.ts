import { Component } from '@angular/core';

@Component({
  selector: 'app-list-personnages',
  templateUrl: './list-personnages.component.html',
  styleUrls: ['./list-personnages.component.css']
})
export class ListPersonnagesComponent {
  personnages = [
    { name: 'Personnage 1' },
    { name: 'Personnage 2' },
    { name: 'Personnage 3' },
    // ... Ajoutez d'autres personnages ici
  ];

}
