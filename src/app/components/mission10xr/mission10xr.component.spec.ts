import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mission10xrComponent } from './mission10xr.component';

describe('Mission10xrComponent', () => {
  let component: Mission10xrComponent;
  let fixture: ComponentFixture<Mission10xrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mission10xrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mission10xrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
