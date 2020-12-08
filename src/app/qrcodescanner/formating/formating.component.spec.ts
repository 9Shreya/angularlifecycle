import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatingComponent } from './formating.component';

describe('FormatingComponent', () => {
  let component: FormatingComponent;
  let fixture: ComponentFixture<FormatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
