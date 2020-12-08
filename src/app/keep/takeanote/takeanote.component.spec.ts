import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeanoteComponent } from './takeanote.component';

describe('TakeanoteComponent', () => {
  let component: TakeanoteComponent;
  let fixture: ComponentFixture<TakeanoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeanoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeanoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
