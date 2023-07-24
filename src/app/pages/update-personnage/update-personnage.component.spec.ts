import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonnageComponent } from './update-personnage.component';

describe('UpdatePersonnageComponent', () => {
  let component: UpdatePersonnageComponent;
  let fixture: ComponentFixture<UpdatePersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePersonnageComponent]
    });
    fixture = TestBed.createComponent(UpdatePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
