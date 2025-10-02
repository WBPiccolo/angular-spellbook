import { Component, effect, inject, OnInit } from '@angular/core';
import { InsertSpellForm } from '../../features/insert-spell-form/insert-spell-form';
import { Spellbook } from "../../features/spellbook/spellbook";
import { SpellStore } from '../../core/store/spellbook.store';
import { Spell } from '../../shared/models/spell.interface';

@Component({
  selector: 'app-main-page',
  imports: [InsertSpellForm, Spellbook],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit {
  spellbookStore = inject(SpellStore);
  selectedSpell: Spell | null = null;
  isAccordionOpen: boolean = false;
  constructor() {
    effect(() => {
      this.spellbookStore.saveSpellbookToLocalStorage();
    })
  }

  ngOnInit(): void {
    this.spellbookStore.loadSpellbookFromLocalStorage();
  }

  fileChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] as File;
    if (file) {
      this.spellbookStore.loadSpellbookFromFile(file);
    }
  }

  setActiveSpell(spell: Spell) {
    this.selectedSpell = spell;
    this.isAccordionOpen = true;
  }

  addSpell() {
    console.log('addSpell clicked');
    this.isAccordionOpen = true;
  }

  saveSpell(spell: Spell) {
    this.isAccordionOpen = false;
    this.spellbookStore.addSpell(spell);
  }

  updateSpell(spell: Spell) {
    this.isAccordionOpen = false;
    //this.spellbookStore.updateSpell(spell);
  }

  print() {
    console.log('print clicked')
  }
}
