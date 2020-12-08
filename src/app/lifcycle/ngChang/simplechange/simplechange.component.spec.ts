import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplechangeComponent } from './simplechange.component';

describe('SimplechangeComponent', () => {
  let component: SimplechangeComponent;
  let fixture: ComponentFixture<SimplechangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplechangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplechangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
