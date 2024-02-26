import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VImpmailComponent } from './v-impmail.component';

describe('VImpmailComponent', () => {
  let component: VImpmailComponent;
  let fixture: ComponentFixture<VImpmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VImpmailComponent]
    });
    fixture = TestBed.createComponent(VImpmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
