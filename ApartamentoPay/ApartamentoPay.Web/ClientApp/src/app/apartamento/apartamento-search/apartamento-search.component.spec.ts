import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentoSearchComponent } from './apartamento-search.component';

describe('ApartamentoSearchComponent', () => {
  let component: ApartamentoSearchComponent;
  let fixture: ComponentFixture<ApartamentoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
