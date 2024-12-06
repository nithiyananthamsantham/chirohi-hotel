import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationLoginComponent } from './reservation-login.component';

describe('ReservationLoginComponent', () => {
  let component: ReservationLoginComponent;
  let fixture: ComponentFixture<ReservationLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationLoginComponent]
    });
    fixture = TestBed.createComponent(ReservationLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
