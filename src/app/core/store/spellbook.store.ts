import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Spell } from "../../shared/models/spell.interface";
import { inject } from "@angular/core";
import { SpellbookService } from "../services/spellbook-service";

export interface SpellStore {
    spells: Spell[]
}

export const initialSpellState: SpellStore = {
    spells: []
}

const localStorageKey = 'angular_spellbook'

export const SpellStore = signalStore(
    { providedIn: 'root' },
    withState(initialSpellState),
    withMethods((store, spellbookService = inject(SpellbookService)) => ({
        addSpell: (newSpell: Spell) => patchState(store, { spells: [...store.spells(), { ...newSpell, spellID: newSpell.spellID ? newSpell.spellID : new Date().getTime() + store.spells().length }] }),
        updateSpell: (spell: Spell) => patchState(store, { spells: [...store.spells().map(s => s.spellID === spell.spellID ? spell : s)] }),
        deleteSpell: (spell: Spell) => patchState(store, { spells: [...store.spells().filter(savedSpell => savedSpell.spellID != spell.spellID)] }),
        saveSpellbookToLocalStorage: () => {
            localStorage.setItem(localStorageKey, JSON.stringify(store.spells()));
        },
        loadSpellbookFromLocalStorage: () => {
            const localStorageData = localStorage.getItem(localStorageKey) || '';
            if (!localStorageData) {
                return;
            }
            const spellbook = JSON.parse(localStorageData) as Spell[];
            if (spellbook?.length) {
                patchState(store, { spells: spellbook })
            }
        },
        saveSpellbookToFile: () => {
            spellbookService.saveSpellbookToFile(store.spells())
        },
        loadSpellbookFromFile: (file: File) => {
            spellbookService.loadSpellbookFromFile(file).then((res => {
                patchState(store, { spells: res })
            }));
        }
    }))
)


