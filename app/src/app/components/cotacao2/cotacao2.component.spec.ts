import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cotacao2Component } from './cotacao2.component';

describe('Cotacao2Component', () => {
  let component: Cotacao2Component;
  let fixture: ComponentFixture<Cotacao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cotacao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cotacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
