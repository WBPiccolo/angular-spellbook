import { Component, Input } from '@angular/core';
import { Spell } from '../../shared/models/spell.interface';

@Component({
  selector: 'app-spell-card',
  imports: [],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.scss'
})
export class SpellCard {
  @Input() spell!: Spell;

}
