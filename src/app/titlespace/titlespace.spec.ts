import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titlespace } from './titlespace';

describe('Titlespace', () => {
  let component: Titlespace;
  let fixture: ComponentFixture<Titlespace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titlespace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titlespace);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
