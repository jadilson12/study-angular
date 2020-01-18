import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

function setup() {
  const fixture = TestBed.createComponent(FooterComponent);
  const component = fixture.componentInstance;

  return { fixture, component };
}
describe('#Footer Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [CommonModule, MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    const { fixture } = setup();
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    const { component } = setup();
    expect(component).toBeDefined();
  });

  it('Deve um texto de descrição', () => {
    const { fixture } = setup();
    const el = fixture.debugElement.nativeElement;
    expect(el.textContent).toBe(' CRUD feito com Angular 8.x');
  });
});
