import {DatePipe} from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRendererComponent } from './date-renderer.component';

describe('DateRendererComponent', () => {
  let component: DateRendererComponent;
  let fixture: ComponentFixture<DateRendererComponent>;
  const pipe = new DatePipe('en');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRendererComponent);
    component = fixture.componentInstance;
    component.date = '2011-05-12T20:01:31Z';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div with .cell-content-wrapper class', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').classList.contains('cell-content-wrapper')).toBeTrue();
  });

  it('should contain date', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toBe(pipe.transform('2011-05-12T20:01:31Z'));
  });

});
