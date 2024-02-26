import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashMailComponent } from './trash-mail.component';

describe('TrashMailComponent', () => {
  let component: TrashMailComponent;
  let fixture: ComponentFixture<TrashMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashMailComponent]
    });
    fixture = TestBed.createComponent(TrashMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
