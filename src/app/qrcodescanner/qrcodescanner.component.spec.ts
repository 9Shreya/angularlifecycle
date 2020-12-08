import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodescannerComponent } from './qrcodescanner.component';

describe('QrcodescannerComponent', () => {
  let component: QrcodescannerComponent;
  let fixture: ComponentFixture<QrcodescannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodescannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodescannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
