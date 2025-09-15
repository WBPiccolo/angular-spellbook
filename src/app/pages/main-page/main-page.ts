import { Component } from '@angular/core';
import { InsertSpellForm } from '../../features/insert-spell-form/insert-spell-form';
import { Spellbook } from "../../features/spellbook/spellbook";

@Component({
  selector: 'app-main-page',
  imports: [InsertSpellForm, Spellbook],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
