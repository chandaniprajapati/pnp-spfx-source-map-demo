import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular11SourceMapWebPartComponent } from './angular11-source-map-web-part.component';

describe('Angular11SourceMapWebPartComponent', () => {
  let component: Angular11SourceMapWebPartComponent;
  let fixture: ComponentFixture<Angular11SourceMapWebPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular11SourceMapWebPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular11SourceMapWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
