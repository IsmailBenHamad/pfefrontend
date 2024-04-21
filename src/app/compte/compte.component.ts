import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Compte } from '../model/compte';
import { Module } from '../model/module'; // Importer le modèle de module

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte: Compte | null = null;
  modules: Module[] = []; // Ajouter une propriété pour stocker les modules

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadCompteInfo();
    this.loadModules(); // Charger les modules lors de l'initialisation du composant
  }

  loadCompteInfo(): void {
    this.compte = this.authService.getCompteInfo();
  }

  loadModules(): void {
    this.modules = this.authService.getModules(); // Récupérer les modules depuis le service
  }
}
