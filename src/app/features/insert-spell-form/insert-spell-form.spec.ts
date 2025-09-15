import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSpellForm } from './insert-spell-form';

describe('InsertSpellForm', () => {
  let component: InsertSpellForm;
  let fixture: ComponentFixture<InsertSpellForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertSpellForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSpellForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
