import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeeComponent } from './add-employee.component';

describe('CreateemployeeComponent', () => {
  let component: AddemployeeComponent;
  let fixture: ComponentFixture<AddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddemployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
