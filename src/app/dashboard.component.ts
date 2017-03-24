import { Component, OnInit } from "@angular/core";

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    template:`
        <h3>Top Heroes</h3>
        <div class="grid grid-pad">
            <div *ngFor="let hero of heroes" class="col-1-4">
                <div class="module hero">
                    <h4>{{hero.name}}</h4>
                </div>
            </div>
        </div>
    `,
    // templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}
