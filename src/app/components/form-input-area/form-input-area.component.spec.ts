import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputAreaComponent } from './form-input-area.component';

describe('FormInputComponent', () => {
  let component: FormInputAreaComponent;
  let fixture: ComponentFixture<FormInputAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormInputAreaComponent]
    });
    fixture = TestBed.createComponent(FormInputAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
