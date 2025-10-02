import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellChipContainer } from './spell-chip-container';

describe('SpellChipContainer', () => {
  let component: SpellChipContainer;
  let fixture: ComponentFixture<SpellChipContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellChipContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellChipContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
