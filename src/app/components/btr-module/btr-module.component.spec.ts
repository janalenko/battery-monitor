import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtrModuleComponent } from './btr-module.component';

describe('BtrModuleComponent', () => {
  let component: BtrModuleComponent;
  let fixture: ComponentFixture<BtrModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtrModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtrModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
