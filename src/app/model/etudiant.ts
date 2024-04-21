export interface Etudiant {
    _id?: string; // Identifiant MongoDB généré automatiquement
    nom: string;
    prenom: string;
    date_naissance: Date;
    numTel?: string; // Facultatif
    email?: string; // Facultatif
    cin?: string; // Facultatif
    niveauScolaire?: string; // Facultatif
    montantApaye?: number; // Facultatif
    formations: string[]; // Tableau d'identifiants d'objets Formation
    compte: string; // Identifiant d'objet Compte
  }
  