import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPComponent } from './employer-p.component';

describe('EmployerPComponent', () => {
  let component: EmployerPComponent;
  let fixture: ComponentFixture<EmployerPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
