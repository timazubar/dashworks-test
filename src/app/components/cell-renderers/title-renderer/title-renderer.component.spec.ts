import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRendererComponent } from './title-renderer.component';

describe('TitleRendererComponent', () => {
  let component: TitleRendererComponent;
  let fixture: ComponentFixture<TitleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
