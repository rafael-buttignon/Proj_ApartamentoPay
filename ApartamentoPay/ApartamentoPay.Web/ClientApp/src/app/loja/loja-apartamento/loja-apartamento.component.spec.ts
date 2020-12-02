import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaApartamentoComponent } from './loja-apartamento.component';

describe('LojaApartamentoComponent', () => {
  let component: LojaApartamentoComponent;
  let fixture: ComponentFixture<LojaApartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaApartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
