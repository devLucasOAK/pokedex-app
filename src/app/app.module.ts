import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './service/pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
