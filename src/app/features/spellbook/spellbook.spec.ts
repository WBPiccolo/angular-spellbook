import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spellbook } from './spellbook';

describe('Spellbook', () => {
  let component: Spellbook;
  let fixture: ComponentFixture<Spellbook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spellbook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spellbook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
