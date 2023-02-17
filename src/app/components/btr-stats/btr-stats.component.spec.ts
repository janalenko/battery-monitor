import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrStatsComponent } from './btr-stats.component';

describe('BtrStatsComponent', () => {
  let component: BtrStatsComponent;
  let fixture: ComponentFixture<BtrStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtrStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtrStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
