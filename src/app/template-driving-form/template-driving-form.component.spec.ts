import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivingFormComponent } from './template-driving-form.component';

describe('TemplateDrivingFormComponent', () => {
  let component: TemplateDrivingFormComponent;
  let fixture: ComponentFixture<TemplateDrivingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
