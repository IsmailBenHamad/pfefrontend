import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Module } from '../model/module';
import { Compte } from '../model/compte';
import { MatDialog } from '@angular/material/dialog';
import { Emploi } from '../model/emploi';
import { EmploiService } from '../services/emploi.service';
import { ModuleService } from '../services/module.service';
import { EmploidetailsComponent } from './emploidetails/emploidetails.component';
import { Etudiant } from '../model/etudiant';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte: Compte | null = null;
  etud: Etudiant | null = null;
  enseig: Enseignant | null = null;
  modules: Module[] = [];
  constructor(private moduleService: ModuleService,
    private dialog: MatDialog, private emploiService: EmploiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchAccountDetails();
  }

  fetchAccountDetails(): void {
    this.etud=this.authService.getEtudiant();
    this.enseig=this.authService.getEnsegnant();
    this.compte = this.authService.getCompteInfo();
    console.log(this.etud)
    if (this.compte) {
       this.modules = this.authService.getModules()||[];
       console.log(this.modules)
      
    }
  }
  
  

  fetchEmploiDetails(empoiId: string, moduleId: string): void {
    this.emploiService.getEmploiById(empoiId).subscribe(
      (emploi: Emploi) => {
        const dialogRef = this.dialog.open(EmploidetailsComponent, {
          width: '100%',
          height: '100%',
          data: { emploi, moduleId }
        });
  
        // Subscribe to the afterClosed observable to react when the dialog is closed
        dialogRef.afterClosed().subscribe(result => {
          console.log("Dialog closed, refreshing modules...");
        });
      },
      (error) => {
        console.error('Error fetching emploi details:', error);
      }
    );
  }
  
}
