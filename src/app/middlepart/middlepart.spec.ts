import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Middlepart } from './middlepart';

describe('Middlepart', () => {
  let component: Middlepart;
  let fixture: ComponentFixture<Middlepart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Middlepart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Middlepart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
