import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TitleRendererComponent} from './title-renderer.component';


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
    component.titleParams = {title: 'test', videoId: '3fumBcKC6RE'};
    component.linkUrl = 'https://www.youtube.com/watch?v=' + component.titleParams.videoId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title text', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').innerText).toEqual('test');
  });

  it('should contain title link url', () => {
    const baseUrl = 'https://www.youtube.com/watch?v=';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('a').href).toEqual(baseUrl + component.titleParams.videoId);
  });
});


