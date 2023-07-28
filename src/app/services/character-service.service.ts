import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl = 'https://api.disneyapi.dev/character';

  constructor(private http:HttpClient) { }
   // Rechercher un personnage par nom
   searchCharacter(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }

  // Obtenir un personnage par ID
  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Créer un personnage
  createCharacter(characterData: any): Observable<any> {
    return this.http.post(this.baseUrl, characterData);
  }

  // Mettre à jour un personnage
  updateCharacter(id: number, characterData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, characterData);
  }
}

