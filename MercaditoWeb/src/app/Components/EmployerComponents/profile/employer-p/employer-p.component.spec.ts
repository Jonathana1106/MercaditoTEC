import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployerPComponent } from './employer-p.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


describe('EmployerPComponent', () => {
  let component: EmployerPComponent;
  let fixture: ComponentFixture<EmployerPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [EmployerPComponent]
    });
    fixture = TestBed.createComponent(EmployerPComponent);
    component = fixture.componentInstance;
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#modifiedName');
    const lastNameInput: HTMLInputElement = hostElement.querySelector('#modifiedLastName');
    const idInput: HTMLInputElement = hostElement.querySelector('#modifiedId');
    const celInput: HTMLInputElement = hostElement.querySelector('#modifiedCel');
    const companyInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyName');
    const cEmailInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyEmail');
    const companyCelInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyCel');

    fixture.detectChanges();

    nameInput.value = 'Andrea';
    lastNameInput.value = 'Carmona';
    idInput.value='2018183396';
    celInput.value='60184140';
    companyInput.value='Frutitas';
    cEmailInput.value='frutitas@gmail.com';
    companyCelInput.value='24311017'


    nameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    idInput.dispatchEvent(new Event('input'));
    celInput.dispatchEvent(new Event('input'));
    companyInput.dispatchEvent(new Event('input'));
    cEmailInput.dispatchEvent(new Event('input'));
    companyCelInput.dispatchEvent(new Event('input'));

    expect(component.nameInput).toBe('Andrea');
    expect(component.lastNameInput).toBe('Carmona');
    expect(component.idInput.toString()).toBe('2018183396');
    expect(component.celInput.toString()).toBe('60184140');
    expect(component.companyInput).toBe('Frutitas');
    expect(component.cEmailInput).toBe('frutitas@gmail.com');
    expect(component.companyCelInput.toString()).toBe('24311017');
  });

  it('should perform display binding in HTML template', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#modifiedName');
    const lastNameInput: HTMLInputElement = hostElement.querySelector('#modifiedLastName');
    const idInput: HTMLInputElement = hostElement.querySelector('#modifiedId');
    const celInput: HTMLInputElement = hostElement.querySelector('#modifiedCel');
    const companyInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyName');
    const cEmailInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyEmail');
    const companyCelInput: HTMLInputElement = hostElement.querySelector('#modifiedCompanyCel');

    const displayName: HTMLInputElement = hostElement.querySelector('#name');
    const displayLastName: HTMLInputElement = hostElement.querySelector('#lastName');
    const displayId: HTMLInputElement = hostElement.querySelector('#id');
    const displayCel: HTMLInputElement = hostElement.querySelector('#cel');
    const displayCompany: HTMLInputElement = hostElement.querySelector('#companyName');
    const displayCEmail: HTMLInputElement = hostElement.querySelector('#companyEmail');
    const displayCCel: HTMLInputElement = hostElement.querySelector('#companyCel');

    fixture.detectChanges();

    fixture.whenStable().then(val => {
        nameInput.value = 'Andrea';
        lastNameInput.value = 'Carmona';
        idInput.value='2018183396';
        celInput.value='60184140';
        companyInput.value='Frutitas';
        cEmailInput.value='frutitas@gmail.com';
        companyCelInput.value='24311017'
    
    
        nameInput.dispatchEvent(new Event('input'));
        lastNameInput.dispatchEvent(new Event('input'));
        idInput.dispatchEvent(new Event('input'));
        celInput.dispatchEvent(new Event('input'));
        companyInput.dispatchEvent(new Event('input'));
        cEmailInput.dispatchEvent(new Event('input'));
        companyCelInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      expect(displayName.textContent).toBe('Andrea');
      expect(displayLastName.textContent).toBe('Carmona');
      expect(displayId.textContent).toBe('2018183396');
      expect(displayCel.textContent).toBe('60184140');
      expect(displayCompany.textContent).toBe('Frutitas');
      expect(displayCEmail.textContent).toBe('frutitas@gmail.com');
      expect(displayCCel.textContent).toBe('24311017');
    });
  });
}); 
