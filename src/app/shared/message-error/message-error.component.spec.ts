import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MessageErrorComponent } from './message-error.component';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

describe('#Messagem de erro componente', () => {
  let component: MessageErrorComponent;
  let fixture: ComponentFixture<MessageErrorComponent>;

  const nameValue: FormControl = new FormControl('inicializarValue');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MessageErrorComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErrorComponent);
    component = fixture.componentInstance;
    component.field = nameValue;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    component.field = nameValue;
    expect(component).toBeTruthy();
  });

  it('Deve ter um required', () => {
    component.field = new FormControl('', Validators.required);
    expect(component.field.errors['required']).toBe(true);
  });

  it('Deve ter um minlength', () => {
    component.field = new FormControl('11', Validators.minLength(5));
    expect(component.field.errors['minlength']).toBeDefined();
  });

  it('Deve ter um maxlength', () => {
    component.field = new FormControl('122', Validators.maxLength(2));
    expect(component.field.errors['maxlength']).toBeDefined();
  });
});
