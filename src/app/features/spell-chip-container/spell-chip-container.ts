import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from '../../shared/models/spell.interface';
import { CommonModule } from '@angular/common';
import { CLASS_COLORS } from '../../shared/const/classes.const';

@Component({
  selector: 'app-spell-chip-container',
  imports: [CommonModule],
  templateUrl: './spell-chip-container.html',
  styleUrl: './spell-chip-container.scss'
})
export class SpellChipContainer {
  @Input() spells: Spell[] = [];

  @Output() spellClicked: EventEmitter<Spell> = new EventEmitter<Spell>
  @Output() deleteSpellClicked: EventEmitter<Spell> = new EventEmitter<Spell>

  colors = CLASS_COLORS;

}
