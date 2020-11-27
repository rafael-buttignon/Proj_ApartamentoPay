import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaPesquisaComponent } from './loja-pesquisa.component';

describe('LojaPesquisaComponent', () => {
  let component: LojaPesquisaComponent;
  let fixture: ComponentFixture<LojaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LojaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LojaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
