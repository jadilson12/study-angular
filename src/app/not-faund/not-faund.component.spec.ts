import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFaundComponent } from './not-faund.component';

describe('NotFaundComponent', () => {
  let component: NotFaundComponent;
  let fixture: ComponentFixture<NotFaundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFaundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFaundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
