import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfimarDeleteComponent } from './confimar-delete.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DialogService } from '../dialog.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

describe('ConfimarDeleteComponent', () => {
  let component: ConfimarDeleteComponent;
  let fixture: ComponentFixture<ConfimarDeleteComponent>;
  let dialogservice: DialogService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConfimarDeleteComponent],
      imports: [MatGridListModule, MatCardModule, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: {} } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
