import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgtextComponent } from './svgtext.component';

describe('SvgtextComponent', () => {
  let component: SvgtextComponent;
  let fixture: ComponentFixture<SvgtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
