import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCNHComponent } from './check-cnh.component';

describe('CheckCNHComponent', () => {
  let component: CheckCNHComponent;
  let fixture: ComponentFixture<CheckCNHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCNHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCNHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
