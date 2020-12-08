import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootingComponent } from './rooting.component';

describe('RootingComponent', () => {
  let component: RootingComponent;
  let fixture: ComponentFixture<RootingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
