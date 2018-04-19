import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavepaymentComponent } from './ravepayment.component';

describe('RavepaymentComponent', () => {
  let component: RavepaymentComponent;
  let fixture: ComponentFixture<RavepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
