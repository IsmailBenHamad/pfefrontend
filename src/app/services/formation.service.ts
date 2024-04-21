import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseUrl = 'http://localhost:3001/api'; // Mettez l'URL de votre API Node.js

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/formations`);
  }

  getFormationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/formations/${id}`);
  }
  getAllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseUrl}/categories`);
  }
  createFormation(formationData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/formations`, formationData);
  }

  updateFormation(id: string, formationData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/formations/${id}`, formationData);
  }

  getFormationsByCategorie(categorieId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/formations/categorie/${categorieId}`);
  }

  deleteFormation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/formations/${id}`); 
  }
}
