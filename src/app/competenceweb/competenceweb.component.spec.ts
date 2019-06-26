import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencewebComponent } from './competenceweb.component';

describe('CompetencewebComponent', () => {
  let component: CompetencewebComponent;
  let fixture: ComponentFixture<CompetencewebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencewebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
