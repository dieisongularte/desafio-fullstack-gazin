import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedorListComponent } from './desenvolvedor-list.component';

describe('DesenvolvedorListComponent', () => {
  let component: DesenvolvedorListComponent;
  let fixture: ComponentFixture<DesenvolvedorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenvolvedorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvedorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
