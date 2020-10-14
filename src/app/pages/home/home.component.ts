import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardsData;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.pokemonService.getCards().subscribe((response: any) => {
      this.cardsData = response.cards;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
}
