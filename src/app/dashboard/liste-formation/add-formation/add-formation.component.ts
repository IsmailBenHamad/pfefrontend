import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';
import { Formation } from 'src/app/model/formation'; // Import the Formation interface
import { Categorie } from 'src/app/model/categorie'; // Import the Categorie interface

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  formationForm: FormGroup;
  categories: Categorie[] = []; // Define an array to store categories

  constructor(
    private formBuilder: FormBuilder,
    private formationService: FormationService
  ) {
    this.formationForm = this.formBuilder.group({
      nomformation: ['', Validators.required],
      duree: ['', Validators.required],
      prix: ['', Validators.required],
      niveau: ['', Validators.required],
      description: [''], // Add description form control
      image: [''],      // Add image form control
      categorie: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
    this.fetchCategories(); 
  }

  fetchCategories(): void {
    this.formationService.getAllCategories().subscribe(
      (categories: Categorie[]) => {
        this.categories = categories; 
      },
      error => {
        console.error('Error fetching categories:', error);
        // Handle error accordingly
      }
    );
  }

  onSubmit(): void {
    if (this.formationForm.valid) {
      const newFormation: Formation = this.formationForm.value;
      this.formationService.createFormation(newFormation).subscribe(
        () => {
          console.log('Formation added successfully');
          // Optionally, you can redirect the user or show a success message
        },
        error => {
          console.error('Error while adding new formation:', error);
          // Handle error accordingly
        }
      );
    }
  }
}
