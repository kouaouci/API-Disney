import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='Thomas';
  password: string ='azerty';

  constructor(private authService: AuthServiceService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/list']); // Redirige vers la page de list personnages après une connexion réussie
      window.open('/list', '_blank');
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  }

}
