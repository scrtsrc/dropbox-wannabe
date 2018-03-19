import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemColumnComponent } from './file-system-column.component';

describe('FileSystemColumnComponent', () => {
  let component: FileSystemColumnComponent;
  let fixture: ComponentFixture<FileSystemColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
