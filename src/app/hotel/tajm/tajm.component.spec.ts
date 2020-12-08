import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajmComponent } from './tajm.component';

describe('TajmComponent', () => {
  let component: TajmComponent;
  let fixture: ComponentFixture<TajmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
