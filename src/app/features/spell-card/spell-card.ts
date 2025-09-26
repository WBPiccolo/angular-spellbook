import { Component, Input } from '@angular/core';
import { Spell } from '../../shared/models/spell.interface';
import { CommonModule } from '@angular/common';
import { CLASS_COLORS } from '../../shared/const/classes.const';
import { LEVEL_STRING } from '../../shared/const/levels.const';
//import { LEVEL_STRING } from '../../shared/const/levels.const';

@Component({
  selector: 'app-spell-card',
  imports: [CommonModule],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.scss'
})
export class SpellCard {
  @Input() spell!: Spell;
  @Input() htmlColour: string = '';

  get formattedSpellLevel(): string {
    return LEVEL_STRING[this.spell.level] || this.spell.level + 'th level'
  }

  get borderColor(): string {
    return CLASS_COLORS[this.spell.class];
  }

  get fontSize() {
    let charNumber =
      (this.spell.description?.length || 0) +
      (this.spell.atHigherLevels?.length || 0);
    if (charNumber < 200) {
      charNumber = 200;
    }
    if (charNumber >= 1000) {
      return 15 - charNumber / 140;
    }

    //Viva i magic numbers
    return 15 - charNumber / 120;
  }
}
