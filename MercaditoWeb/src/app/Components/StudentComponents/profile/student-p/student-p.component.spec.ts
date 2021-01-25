import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPComponent } from './student-p.component';

describe('StudentPComponent', () => {
  let component: StudentPComponent;
  let fixture: ComponentFixture<StudentPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
