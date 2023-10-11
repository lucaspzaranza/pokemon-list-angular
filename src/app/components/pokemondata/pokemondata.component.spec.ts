import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondataComponent } from './pokemondata.component';

describe('PokemondataComponent', () => {
  let component: PokemondataComponent;
  let fixture: ComponentFixture<PokemondataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemondataComponent]
    });
    fixture = TestBed.createComponent(PokemondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
