import { TestBed } from '@angular/core/testing';

import { ApartamentoService } from './apartamento.service';

describe('ApartamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApartamentoService = TestBed.get(ApartamentoService);
    expect(service).toBeTruthy();
  });
});
