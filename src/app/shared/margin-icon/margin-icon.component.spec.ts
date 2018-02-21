import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginIconComponent } from './margin-icon.component';

describe('MarginIconComponent', () => {
  let component: MarginIconComponent;
  let fixture: ComponentFixture<MarginIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
