import {ComponentFixture, TestBed} from '@angular/core/testing';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

import {ThumbnailRendererComponent} from './thumbnail-renderer.component';

export const waitUntil = async (
  untilTruthy: () => boolean
): Promise<boolean> => {
  while (!untilTruthy()) {
    await interval(25)
      .pipe(take(1))
      .toPromise();
  }
  return Promise.resolve(true);
};

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
