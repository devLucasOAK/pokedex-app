import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokelist: any[] = []
  
  offset: number = 1
  limit: number = 20
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.pokemonService.getPokemons(this.limit, (this.offset * this.limit) - this.limit).subscribe(
      (res) => {
        this.totalPokemons = res.count
        
        res.results.forEach((result: any) => {
          this.pokemonService.getPokemonByName(result.name).subscribe(
            (uniqres) => {
              this.pokelist.push(uniqres)
            }
          )
        });
        console.log(this.pokelist)
      }
    )
  }
}
