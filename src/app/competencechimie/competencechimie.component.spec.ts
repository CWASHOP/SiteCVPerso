import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencechimieComponent } from './competencechimie.component';

describe('CompetencechimieComponent', () => {
  let component: CompetencechimieComponent;
  let fixture: ComponentFixture<CompetencechimieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencechimieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencechimieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
