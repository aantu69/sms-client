import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftIndexComponent } from './shift-index.component';

describe('ShiftIndexComponent', () => {
  let component: ShiftIndexComponent;
  let fixture: ComponentFixture<ShiftIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
