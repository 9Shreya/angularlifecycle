import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoComponent } from './costo.component';

describe('CostoComponent', () => {
  let component: CostoComponent;
  let fixture: ComponentFixture<CostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
