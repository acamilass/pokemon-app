import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = 'https://api.pokemontcg.io/v1';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get(`${URL}/cards`);
  }
}
