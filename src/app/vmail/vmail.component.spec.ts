import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmailComponent } from './vmail.component';

describe('VmailComponent', () => {
  let component: VmailComponent;
  let fixture: ComponentFixture<VmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VmailComponent]
    });
    fixture = TestBed.createComponent(VmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
