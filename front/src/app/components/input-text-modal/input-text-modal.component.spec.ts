import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextModalComponent } from './input-text-modal.component';

describe('InputTextModalComponent', () => {
  let component: InputTextModalComponent;
  let fixture: ComponentFixture<InputTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
