import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokecountComponent } from './pokecount.component';

describe('PokecountComponent', () => {
  let component: PokecountComponent;
  let fixture: ComponentFixture<PokecountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokecountComponent]
    });
    fixture = TestBed.createComponent(PokecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
