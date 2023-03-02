import { Component } from '@angular/core';
import { Hero } from "../hero"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }
}
