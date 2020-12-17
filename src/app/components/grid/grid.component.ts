import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GetContextMenuItemsParams, MenuItemDef} from 'ag-grid-community';
import 'ag-grid-enterprise';

import {ApiData, RowItem} from '../../interfaces';
import {GridDataService} from '../../services/grid-data.service';
import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {TitleRendererComponent} from '../cell-renderers/title-renderer/title-renderer.component';
import {DateRendererComponent} from '../cell-renderers/date-renderer/date-renderer.component';
import {TextRendererComponent} from '../cell-renderers/text-renderer/text-renderer.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    {
      field: 'thumbnail',
      headerName: '',
      cellRendererFramework: ThumbnailRendererComponent,
      headerComponentParams: {
        menuIcon: 'fa-bars',
      }
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

  defaultColDef = {
    flex: 1,
    wrapText: true,
    autoHeight: true,
    sortable: true,
    resizable: true,
  };

  rowData$!: Observable<RowItem[]>;

  constructor(private gridDataService: GridDataService) { }

  ngOnInit(): void {
    /*this.rowData$ = this.gridDataService.getApiData<ApiData>()
      .pipe(
        map((allData: ApiData): Item[] => {
          console.log('allData', allData.items);
          return allData.items;
        })
      );*/
    this.rowData$ = this.gridDataService.getMockData<ApiData>().pipe(
      map(({items}: ApiData): RowItem[] => {
        return items.map((item) => ({
            thumbnail: item.snippet.thumbnails.default,
            publishedOn: item.snippet.publishedAt,
            videoTitle: {title: item.snippet.title, videoId: item.id.videoId},
            description: item.snippet.description,
          })
        );
      })
    );
  }

  getContextMenuItems(params: GetContextMenuItemsParams): any {
    const menu: MenuItemDef[] = [
      {
        name: 'Open in new tab',
        action: () => {
          const url = `https://www.youtube.com/watch?v=${params.value.videoId}`;
          window.open(url, '_blank');
        }
      }
    ];

    return params.column.getColId() === 'videoTitle' ? menu : null;
  }

  onGridReady(params: any): void {
    console.log('params', params);
  }
}
