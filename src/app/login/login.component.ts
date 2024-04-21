import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import du Router
import { AuthService } from '../auth.service';
import { Compte } from '../model/compte';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Ajoutez un type explicite et une valeur par défaut
  password: string = ''; // Ajoutez un type explicite et une valeur par défaut
  newUsername: string = ''; // Ajoutez le champ de nouvel utilisateur
  newPassword: string = ''; 
  constructor(
    private authService: AuthService,
    private router: Router // Injection du Router
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response.token) {
          this.authService.setToken(response.token);
          
          // Vérifiez que les données de compte et modules sont présentes avant de les stocker
          if (response.compte) {
            this.authService.setCompte(response.compte);
          }
          
          if (response.modules) {
            this.authService.setModules(response.modules);
          }
          
          this.router.navigate(['/compte']);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  
  }
  register(): void {
    this.authService.register(this.newUsername, this.newPassword).subscribe((registered) => {
      if (registered) {
        // Rediriger vers la page de connexion après l'inscription réussie
        this.router.navigate(['/login']);
      } else {
        // Gérer l'échec de l'inscription
      }
    });
  }

}
