import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaCarrinhoComprasComponent } from './loja-carrinho-compras.component';

describe('LojaCarrinhoComprasComponent', () => {
  let component: LojaCarrinhoComprasComponent;
  let fixture: ComponentFixture<LojaCarrinhoComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaCarrinhoComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaCarrinhoComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
