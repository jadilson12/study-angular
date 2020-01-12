import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTableListComponent } from './button-table-list.component';

describe('ButtonTableListComponent', () => {
  let component: ButtonTableListComponent;
  let fixture: ComponentFixture<ButtonTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
