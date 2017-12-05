import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontselectComponent } from './fontselect.component';

describe('FontselectComponent', () => {
  let component: FontselectComponent;
  let fixture: ComponentFixture<FontselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
