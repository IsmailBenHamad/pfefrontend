import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from 'src/app/model/etudiant';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() studentCreated: EventEmitter<any> = new EventEmitter();

  isModalOpen: boolean = true;

  newEtudiant: Etudiant = {
    nom: '',                 
    prenom: '',              
    date_naissance: new Date(),
    email: '',               
    cin: '',                 
    niveauScolaire: '',      
    montantApaye: 0,         
    formations: [],          
    compte: ''               
  };

  constructor(private dialogRef: MatDialogRef<AddStudentComponent>, private etudiantService: EtudiantService) { }

  onSubmit() {
    this.etudiantService.createEtudiant(this.newEtudiant).subscribe({
      next: (etudiant) => {
        console.log('Etudiant created:', etudiant);
        this.dialogRef.close(etudiant); // Pass the new student as the dialog close result
      },
      error: (error) => console.error(error)
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
