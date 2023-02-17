import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeBarComponent } from './charge-bar.component';

describe('ChargeBarComponent', () => {
  let component: ChargeBarComponent;
  let fixture: ComponentFixture<ChargeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
