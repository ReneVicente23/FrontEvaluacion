import { TestBed } from '@angular/core/testing';

import { PagoEmpleadoService } from './pago-empleado.service';

describe('PagoEmpleadoService', () => {
  let service: PagoEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
