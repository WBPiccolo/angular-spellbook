import { Component, inject } from '@angular/core';
import { SpellStore } from '../../core/store/spellbook.store';
import { SpellCard } from "../spell-card/spell-card";

@Component({
  selector: 'app-spellbook',
  imports: [SpellCard],
  templateUrl: './spellbook.html',
  styleUrl: './spellbook.scss'
})
export class Spellbook {
  spellStore = inject(SpellStore);
}
