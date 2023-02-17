import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrCellComponent } from './btr-cell.component';

describe('BtrCellComponent', () => {
  let component: BtrCellComponent;
  let fixture: ComponentFixture<BtrCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtrCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtrCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
