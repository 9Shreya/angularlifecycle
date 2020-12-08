import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiComponent } from './radi.component';

describe('RadiComponent', () => {
  let component: RadiComponent;
  let fixture: ComponentFixture<RadiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
