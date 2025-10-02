import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accordion } from "../accordion/accordion";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Spell } from '../../shared/models/spell.interface';
import { SCHOOLS } from '../../shared/const/schools.const';
import { CLASS_COLORS, CLASSES } from '../../shared/const/classes.const';
import { LEVELS } from '../../shared/const/levels.const';
@Component({
  selector: 'app-insert-spell-form',
  imports: [Accordion, ReactiveFormsModule],
  templateUrl: './insert-spell-form.html',
  styleUrl: './insert-spell-form.scss'
})
export class InsertSpellForm {
  @Input() isAccordionOpen: boolean = false;
  @Input() set currentSpell(spell: Spell | null) {
    this.isEditMode = !!spell;
    if (!spell) {
      return;
    }

    this.spellForm.patchValue(spell)
  }
  
  isEditMode: boolean = false;

  spellForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    level: new FormControl<number>(0),
    school: new FormControl<string>('', Validators.required),
    castingTime: new FormControl<string>(''),
    duration: new FormControl<string>(''),
    components: new FormControl<string>(''),
    description: new FormControl<string>('', Validators.required),
    atHigherLevels: new FormControl<string>(''),
    source: new FormControl<string>(''),
    isRitual: new FormControl<boolean>(false),
    requiresConcentration: new FormControl<boolean>(false),
    range: new FormControl<string>(''),
    class: new FormControl<string>('', Validators.required),
    spellID: new FormControl<number>(-1)
  })

  schools = SCHOOLS;
  classes = CLASSES;
  levels = LEVELS;
  colors = CLASS_COLORS;

  @Output() saveNewSpellClicked = new EventEmitter<Spell>()
  @Output() updateSpellClicked = new EventEmitter<Spell>()

  emitSaveSpell() {
    this.saveNewSpellClicked.emit(this.spellForm.value)
  }

  emitUpdateSpell() {
    this.updateSpellClicked.emit(this.spellForm.value)
  }

  resetForm() {
    this.isEditMode = false;
    this.spellForm.reset();
  }
}
