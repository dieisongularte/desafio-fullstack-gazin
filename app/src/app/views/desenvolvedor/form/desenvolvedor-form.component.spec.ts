import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedorFormComponent } from './desenvolvedor-form.component';

describe('DesenvolvedorFormComponent', () => {
  let component: DesenvolvedorFormComponent;
  let fixture: ComponentFixture<DesenvolvedorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenvolvedorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
