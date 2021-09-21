import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor() { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES); // creates an observable array from the regular array HEROES
    return heroes;
  }
}
