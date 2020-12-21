import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AgGridModule} from 'ag-grid-angular';

import { GridComponent } from './grid.component';
import {GridDataService} from '../../services/grid-data.service';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {DateRendererComponent} from '../cell-renderers/date-renderer/date-renderer.component';
import {TitleRendererComponent} from '../cell-renderers/title-renderer/title-renderer.component';
import {TextRendererComponent} from '../cell-renderers/text-renderer/text-renderer.component';


describe('GridComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  const getGridElement = (): HTMLElement => {
    return fixture.debugElement.query(By.css('.ag-theme-alpine')) ?
      fixture.debugElement.query(By.css('.ag-theme-alpine')).nativeElement :
      null;
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridModule.withComponents([ThumbnailRendererComponent, DateRendererComponent]), HttpClientTestingModule],
      declarations: [ GridComponent, HostComponent ],
      providers: [ GridDataService ]
    })
    .compileComponents();
  });

  it('should create by default params', () => {
    const columnDefs = [
      {
        field: 'thumbnail',
        headerName: '',
        cellRendererFramework: ThumbnailRendererComponent,
      },
      {
        field: 'publishedOn',
        headerName: 'Published On',
        cellRendererFramework: DateRendererComponent,
      },
      {
        field: 'videoTitle',
        headerName: 'Video Title',
        cellRendererFramework: TitleRendererComponent
      },
      {
        field: 'description',
        headerName: 'Description',
        cellRendererFramework: TextRendererComponent
      }
    ];

    const rowData = [{
      thumbnail: {
        url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/default.jpg',
        width: 120,
        height: 90
      },
      publishedOn: '2020-06-24T14:00:11Z',
      videoTitle: {
        title: 'john sleep',
        videoId: 'KvA1cmT2TYc'
      },
      description: 'o https://twitter.com/TOOBOEofficial HP → http://tooboe.com/'
    },
      {
        thumbnail: {
          url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/default.jpg',
          width: 120,
          height: 90
        },
        publishedOn: '2020-06-24T14:00:11Z',
        videoTitle: {
          title: 'john slee2',
          videoId: 'KvA1cmT2TYc'
        },
        description: 'on Twitps://twitter.com/TOOBOEofficial HP → http://tooboe.com/'
      },
      {
        thumbnail: {
          url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/default.jpg',
          width: 120,
          height: 90
        },
        publishedOn: '2020-06-24T14:00:11Z',
        videoTitle: {
          title: 'john sleep3',
          videoId: 'KvA1cmT2TYc'
        },
        description: 'on Twitter john → https://twitt//tooboe.com/'
      }];
    const template = `
    <ag-grid-angular
      class="ag-theme-alpine"
      style="width: 100%; height: 100vh"
      [rowData]="[{
      thumbnail: {
        url: 'https://i.ytimg.com/vi/KvA1cmT2TYc/default.jpg',
        width: 120,
        height: 90
      },
      publishedOn: '2020-06-24T14:00:11Z',
      videoTitle: {
        title: 'john sleep',
        videoId: 'KvA1cmT2TYc'
      },
      description: 'o https://twitter.com/TOOBOEofficial HP → http://tooboe.com/'
    }]"
      [columnDefs]="[
    {
      field: 'thumbnail',
      headerName: '',
      cellRendererFramework: ThumbnailRendererComponent
    },
    {
      field: 'publishedOn',
      headerName: 'Published On',
      cellRendererFramework: DateRendererComponent
    },
    {
      field: 'videoTitle',
      headerName: 'Video Title',
      cellRendererFramework: TitleRendererComponent
    },
    {
      field: 'description',
      headerName: 'Description',
      cellRendererFramework: TextRendererComponent
    }
  ]"
    ></ag-grid-angular>
    `;
    fixture = createHostComponent(template);
    expect(getGridElement).toBeDefined();
  });
});


@Component({ selector: 'app-grid-host', template: '' })
class HostComponent {}

export function createHostComponent( template: string ): ComponentFixture<HostComponent> {
  TestBed.overrideComponent(HostComponent, { set: { template} });
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  return fixture as ComponentFixture<HostComponent>;
}
