import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnbasComponent } from './enbas.component';

describe('EnbasComponent', () => {
  let component: EnbasComponent;
  let fixture: ComponentFixture<EnbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
