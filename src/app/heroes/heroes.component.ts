import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  

  heroes:Hero[]=[];
  constructor(private heroService:HeroService,private messageService : MessageService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

 
  getHeroes(){
     this.heroService.getHeroes()
     .subscribe(mheroes => this.heroes = mheroes);
  }

}
