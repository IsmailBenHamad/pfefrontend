import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { ContactComponent } from './contact/contact.component';
import { Er404Component } from './er404/er404.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';

import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { ModulesComponent } from './modules/modules.component';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';
import { EtudiantComponent } from './dashboard/etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CategorieComponent } from './categorie/categorie.component';
import { EmploiComponent } from './dashboard/emploi/emploi.component';
import { CompteComponent } from './compte/compte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AddStudentComponent } from './dashboard/etudiant/add-student/add-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateStudentComponent } from './dashboard/etudiant/update-student/update-student.component';
import { ListeFormationComponent } from './dashboard/liste-formation/liste-formation.component';
import { AddFormationComponent } from './dashboard/liste-formation/add-formation/add-formation.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { UpdateFormationComponent } from './dashboard/liste-formation/update-formation/update-formation.component';
import { ListeCategorieComponent } from './dashboard/liste-categorie/liste-categorie.component';
import { AddcategorieComponent } from './dashboard/liste-categorie/addcategorie/addcategorie.component';
import { UpdateCategorieComponent } from './dashboard/liste-categorie/update-categorie/update-categorie.component';
import { AddemploiComponent } from './dashboard/emploi/addemploi/addemploi.component';
import { UpdateEmploiComponent } from './dashboard/emploi/update-emploi/update-emploi.component';
import { RegisterAccountComponent } from './dashboard/etudiant/register-account/register-account.component';
import { ModuleComponent } from './dashboard/module/module.component';
import { EtudiantModuleComponent } from './dashboard/module/etudiant-module/etudiant-module.component';
import { AddStudentModuleComponent } from './dashboard/module/edit/add-student-module/add-student-module.component';
import { EmploiDetailsModalComponent } from './dashboard/module/emploi-details-modal/emploi-details-modal.component';
import { AddModuleComponent } from './dashboard/module/edit/add-module/add-module.component';
import { UpdateModuleComponent } from './dashboard/module/edit/update-module/update-module.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileComponent } from './profile/profile.component';
import { EmploidetailsComponent } from './compte/emploidetails/emploidetails.component';
import { FormateurprofileComponent } from './formateurprofile/formateurprofile.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    Er404Component,
    TestimonialComponent,
    TeamComponent,
    LoginComponent,
    LogoutComponent,
    ModulesComponent,
    ProfileComponent,
    EmploidetailsComponent,
    FormateurprofileComponent    
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
