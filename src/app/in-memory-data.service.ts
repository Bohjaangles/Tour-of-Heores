import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './hero'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const heroes = [
        {id: 12, name: 'Potatoe Man'},
        {id: 13, name: 'Dr. CrimpsForDays'},
        {id: 14, name: 'The guy over there'},
        {id: 15, name: 'President Falcon'},
        {id: 16, name: 'Froggy TruckBear'},
        {id: 17, name: 'Professor Clippy'},
        {id: 18, name: 'Dr. Michael Jordan'},
        {id: 19, name: 'Pendulum Netsky'},
        {id: 20, name: 'Whiny Child Whisperer'},
        {id: 21, name: 'Seventeen red pandas in a trench coat named Vinny'},
        {id: 22, name: 'Captian Quakkers'},
      ];
      return {heroes};
  }
  genID(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
