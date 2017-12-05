import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebraskaComponent } from './nebraska.component';

describe('NebraskaComponent', () => {
  let component: NebraskaComponent;
  let fixture: ComponentFixture<NebraskaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebraskaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebraskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
