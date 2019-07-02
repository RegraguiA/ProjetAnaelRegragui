import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Projet} from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private ProjetUrl: string = 'http://localhost:8080/api/projet';
  constructor(private http: HttpClient) { }

findAll(): Observable<Projet[]>{  
  return this.http.get<Projet[]>(this.ProjetUrl);
}

findById(id :number): Observable<Projet>{
  return this.http.get<Projet>(this.ProjetUrl + "/" + id);
}

save(projet: Projet): Observable<Projet>{
  console.log("b "+this.ProjetUrl);
  return this.http.post<Projet>(this.ProjetUrl, projet);
}

delete(id: number): Observable<Projet>{
  return this.http.get<Projet>(`${this.ProjetUrl}/${id}/delete`);
}

}
