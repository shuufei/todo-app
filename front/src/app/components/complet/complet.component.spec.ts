import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletComponent } from './complet.component';

describe('CompletComponent', () => {
  let component: CompletComponent;
  let fixture: ComponentFixture<CompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
