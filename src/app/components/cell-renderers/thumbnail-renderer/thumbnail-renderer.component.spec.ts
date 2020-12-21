import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ThumbnailRendererComponent} from './thumbnail-renderer.component';

describe('ThumbnailRendererComponent', () => {
  let component: ThumbnailRendererComponent;
  let fixture: ComponentFixture<ThumbnailRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailRendererComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailRendererComponent);
    component = fixture.componentInstance;
    component.thumbnailParams = {
      url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
      height: 90,
      width: 120
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain div with .cell-content-wrapper class', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').classList.contains('cell-content-wrapper')).toBeTrue();
  });

  it('should draw image by url', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toBe(component.thumbnailParams.url);
  });

  it('should apply styles by height and width attributes', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').height).toBe(component.thumbnailParams.height);
    expect(fixture.nativeElement.querySelector('img').width).toBe(component.thumbnailParams.width);
  });
});
