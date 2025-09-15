import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Spell } from "../../shared/models/spell.interface";

export interface SpellStore {
    spells: Spell[]
}

export const initialSpellState: SpellStore = {
    spells: []
}

export const SpellStore = signalStore(
    { providedIn: 'root' },
    withState(initialSpellState),
    withMethods((store) => ({
        addSpell: (newSpell: Spell) => patchState(store, { spells: [...store.spells(), { ...newSpell, spellID: newSpell.spellID ? newSpell.spellID : new Date().getTime() + store.spells().length }] }),

    }))
)