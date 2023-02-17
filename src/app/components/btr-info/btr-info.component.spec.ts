import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrInfoComponent } from './btr-info.component';

describe('BtrInfoComponent', () => {
  let component: BtrInfoComponent;
  let fixture: ComponentFixture<BtrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtrInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
