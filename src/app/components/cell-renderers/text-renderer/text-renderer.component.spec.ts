import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRendererComponent } from './text-renderer.component';

describe('TextRendererComponent', () => {
  let component: TextRendererComponent;
  let fixture: ComponentFixture<TextRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRendererComponent);
    component = fixture.componentInstance;
    component.description = 'Description';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div with .cell-content-wrapper class', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').classList.contains('cell-content-wrapper')).toBeTrue();
  });

  it('should contain description', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toBe(component.description);
  });
});
