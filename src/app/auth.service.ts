import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private tokenKey = 'token';
  private compteInfo: any = null;
  private userModules: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.initializeAuthState();
  }

  private initializeAuthState(): void {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this.isAuthenticated = true;
      // Consider validating token with the server here
    }
  }
  isAdminUser(): boolean {
    return this.isAuthenticatedUser() && this.compteInfo?.role === 'admin';
  }
  isFormateur(): boolean{
    return this.isAuthenticatedUser() && this.compteInfo?.role === 'formateur';
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/api/login', { nomUtilisateur: username, motDePasse: password }).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
          this.setCompte(response.user); // Adjust according to actual response structure
          this.isAuthenticated = true;
        }
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/api/register', { nomUtilisateur: username, motDePasse: password });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated = false;
    this.compteInfo = null;
    this.router.navigate(['/home']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated = true;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setCompte(compte: any): void {
    this.compteInfo = compte;
  }
  
  getCompteInfo(): any {
    return this.compteInfo;
  }

  setModules(modules: any[]): void {
    this.userModules = modules;
  }
  
  getModules(): any[] {
    return this.userModules;
  }
}
