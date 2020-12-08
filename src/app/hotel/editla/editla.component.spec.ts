import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlaComponent } from './editla.component';

describe('EditlaComponent', () => {
  let component: EditlaComponent;
  let fixture: ComponentFixture<EditlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
