import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTrabajadorComponent } from './pay-trabajador.component';

describe('PayTrabajadorComponent', () => {
  let component: PayTrabajadorComponent;
  let fixture: ComponentFixture<PayTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
