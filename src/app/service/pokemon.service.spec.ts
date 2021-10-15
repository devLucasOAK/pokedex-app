import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { PokemonService } from './pokemon.service';

fdescribe('PokemonService', () => {
  let service: PokemonService;
  let http: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    http = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all pokemons', () => {
    service.getPokemons().subscribe(
      (response) => {
        expect(response).toBeTruthy()
        expect(response.results).toBeGreaterThan(0)
      }
    )

    const request = http.expectOne(environment.apiUrl);

    expect(request.request.method).toEqual('GET')

  });

  it('should return pokemon by name', () => {

    let pokemon = 'bulbassaur'

    service.getPokemonByName(pokemon).subscribe(
      (response) => {
        expect(response).toBeTruthy()
        expect(response.name).toEqual(pokemon)
        expect(response.types[0].type.name).toEqual('grass')
      }
    )

    const request = http.expectOne(environment.apiUrl + pokemon);

    expect(request.request.method).toEqual('GET')
  });

  afterEach(() => {
    http.verify()
  })

  
});
