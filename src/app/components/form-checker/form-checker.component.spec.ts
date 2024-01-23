import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckerComponent } from './form-checker.component';

describe('FormCheckerComponent', () => {
  let component: FormCheckerComponent;
  let fixture: ComponentFixture<FormCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormCheckerComponent]
    });
    fixture = TestBed.createComponent(FormCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
