import {Component, Input} from '@angular/core'
import {Hero} from "./hero";

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}}'s Details:</h2>
      <div>
        <label>ID: </label>{{hero.id}}
        <input [(ngModel)]='hero.name' placeholder="name">
      </div>
    </div>`
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
