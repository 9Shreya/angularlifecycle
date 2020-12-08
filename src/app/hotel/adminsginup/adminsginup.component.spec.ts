import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsginupComponent } from './adminsginup.component';

describe('AdminsginupComponent', () => {
  let component: AdminsginupComponent;
  let fixture: ComponentFixture<AdminsginupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsginupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsginupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
