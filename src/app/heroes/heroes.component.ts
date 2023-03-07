import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim()
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  // onSelect(hero: Hero) {
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected Hero id=${hero.id}`)
  // }
}
