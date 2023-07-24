import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private  validUsername = 'Thomas';
  private  validPassword = 'azerty';

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      // Stocke l'authentification dans le local storage
      localStorage.setItem('authenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    // Supprime l'authentification du local storage lors de la déconnexion
    localStorage.removeItem('authenticated');
  }

  isAuthenticated(): boolean {
    // Vérifie si l'utilisateur est authentifié en vérifiant la valeur dans le local storage
    return localStorage.getItem('authenticated') === 'true';
  }

  constructor() { }
}
