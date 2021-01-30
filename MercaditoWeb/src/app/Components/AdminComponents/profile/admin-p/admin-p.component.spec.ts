import { AdminPComponent } from './admin-p.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('AdminPComponent', () => {
  let component: AdminPComponent;
  let fixture: ComponentFixture<AdminPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [AdminPComponent]
    });
    fixture = TestBed.createComponent(AdminPComponent);
    component = fixture.componentInstance;
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#modifiedName');
    const lastNameInput: HTMLInputElement = hostElement.querySelector('#modifiedLastName');
    const idInput: HTMLInputElement = hostElement.querySelector('#modifiedId');
    const celInput: HTMLInputElement = hostElement.querySelector('#modifiedCel');

    fixture.detectChanges();

    nameInput.value = 'Andrea';
    lastNameInput.value = 'Carmona';
    idInput.value='2018183396';
    celInput.value='60184140';

    nameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    idInput.dispatchEvent(new Event('input'));
    celInput.dispatchEvent(new Event('input'));

    expect(component.nameInput).toBe('Andrea');
    expect(component.lastNameInput).toBe('Carmona');
    expect(component.idInput.toString()).toBe('2018183396');
    expect(component.celInput.toString()).toBe('60184140');
  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#modifiedName');
    const lastNameInput: HTMLInputElement = hostElement.querySelector('#modifiedLastName');
    const idInput: HTMLInputElement = hostElement.querySelector('#modifiedId');
    const celInput: HTMLInputElement = hostElement.querySelector('#modifiedCel');

    const displayName: HTMLInputElement = hostElement.querySelector('#name');
    const displayLastName: HTMLInputElement = hostElement.querySelector('#lastName');
    const displayId: HTMLInputElement = hostElement.querySelector('#id');
    const displayCel: HTMLInputElement = hostElement.querySelector('#cel');

    fixture.detectChanges();

    fixture.whenStable().then(val => {
      nameInput.value = 'Andrea';
      lastNameInput.value = 'Carmona';
      idInput.value='2018183396';
      celInput.value='60184140';

      nameInput.dispatchEvent(new Event('input'));
      lastNameInput.dispatchEvent(new Event('input'));
      idInput.dispatchEvent(new Event('input'));
      celInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      expect(displayName.textContent).toBe('Andrea');
      expect(displayLastName.textContent).toBe('Carmona');
      expect(displayId.textContent).toBe('2018183396');
      expect(displayCel.textContent).toBe('60184140');
    });
  });
}); 