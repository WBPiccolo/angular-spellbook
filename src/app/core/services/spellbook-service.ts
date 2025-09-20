import { Injectable } from '@angular/core';
import { Spell } from '../../shared/models/spell.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellbookService {

  saveSpellbookToFile(spellbook: Spell[], filename: string = 'My spellbook', extension: string = 'json') {
    const link = document.createElement('a');
    const file = new Blob([JSON.stringify(spellbook)], { type: 'application/json' });
    link.href = URL.createObjectURL(file);
    link.download = `${filename}.${extension}`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  loadSpellbookFromFile(file: File): Promise<Spell[]> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        if (fileReader.result) {
          try {
            const res = JSON.parse(fileReader.result.toString()) as Spell[];
            const spells = res.map((s, index) => ({
              ...s,
              spellID: Date.now() + index
            }));
            resolve(spells);
          } catch (e) {
            console.error('Invalid file');
            resolve([]);
          }
        } else {
          resolve([]);
        }
      };

      fileReader.onerror = () => reject(fileReader.error);

      fileReader.readAsText(file, 'utf-8');
    });
  }

}
