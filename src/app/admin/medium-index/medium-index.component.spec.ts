import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumIndexComponent } from './medium-index.component';

describe('MediumIndexComponent', () => {
  let component: MediumIndexComponent;
  let fixture: ComponentFixture<MediumIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
