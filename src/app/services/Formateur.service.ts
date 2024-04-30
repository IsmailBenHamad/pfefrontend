import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';// Make sure the path is correct

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private baseUrl = 'http://localhost:3001/api/enseignants'; // Adjust if your base URL differs

  constructor(private http: HttpClient) { }

  getAllEnseignant(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.baseUrl);
  }

  getEnseignantById(id: string): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.baseUrl}/${id}`);
  }

  createEnseignant(enseignantrData: any): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.baseUrl, enseignantrData);
  }

  updateEnseignant(id: string, enseignantrData: any): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.baseUrl}/${id}`, enseignantrData);
  }

  deleteEnseignant(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
