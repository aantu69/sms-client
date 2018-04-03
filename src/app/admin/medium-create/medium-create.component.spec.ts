import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCreateComponent } from './medium-create.component';

describe('MediumCreateComponent', () => {
  let component: MediumCreateComponent;
  let fixture: ComponentFixture<MediumCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
