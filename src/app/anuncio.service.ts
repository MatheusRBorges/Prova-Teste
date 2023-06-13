import { anuncio } from './anuncio/anuncio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  getAnuncio() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getProduto(): Observable<anuncio[]> {
      let url = "http://localhost:3000/anuncio";
      return this.http.get<anuncio[]>(url);
  }
}

