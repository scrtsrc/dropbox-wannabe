import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSystemContainerComponent } from './file-system-container.component';

describe('FileSystemContainerComponent', () => {
  let component: FileSystemContainerComponent;
  let fixture: ComponentFixture<FileSystemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSystemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSystemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
