import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPersonnageComponent } from './modal-personnage.component';

describe('ModalPersonnageComponent', () => {
  let component: ModalPersonnageComponent;
  let fixture: ComponentFixture<ModalPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPersonnageComponent]
    });
    fixture = TestBed.createComponent(ModalPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
