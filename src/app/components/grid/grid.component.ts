import {Component, OnInit} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GetContextMenuItemsParams, GetMainMenuItemsParams, MenuItemDef} from 'ag-grid-community';
import 'ag-grid-enterprise';

import {ApiData, EColumnId, RowItem} from '../../interfaces';
import {GridDataService} from '../../services/grid-data.service';
import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {TitleRendererComponent} from '../cell-renderers/title-renderer/title-renderer.component';
import {DateRendererComponent} from '../cell-renderers/date-renderer/date-renderer.component';
import {TextRendererComponent} from '../cell-renderers/text-renderer/text-renderer.component';
import {HeaderCheckboxComponent} from '../header-renderers/header-checkbox/header-checkbox.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs: any = [
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

  colDefsWithCheckbox  = [
    {
      field: 'checkbox',
      headerName: '',
      minWidth: '50',
      maxWidth: '50',
      headerComponentFramework: HeaderCheckboxComponent,
      checkboxSelection: true,
      suppressMenu: true,
      suppressSorting: true,
      suppressRowClickSelection: true,
      headerValueGetter: () => this.rowDataLength
    },
    ...this.columnDefs
  ];

  defaultColDef = {
    flex: 1,
    wrapText: true,
    autoHeight: true,
    sortable: true,
    resizable: true,
  };

  rowData$!: Observable<RowItem[]>;

  rowDataLength!: number;
  public isCheckboxCol = true;

  constructor(private gridDataService: GridDataService) { }

  ngOnInit(): void {
    /*this.rowData$ = this.gridDataService.getApiData<ApiData>()
      .pipe(
        map((allData: ApiData): Item[] => {
          console.log('allData', allData.items);
          return allData.items;
        })
      );*/
    console.log(this.colDefsWithCheckbox);
    if (this.isCheckboxCol) {
      this.columnDefs = this.colDefsWithCheckbox;
    }
    this.rowData$ = this.gridDataService.getMockData<ApiData>().pipe(
      tap(({items}) => this.rowDataLength = items.length),
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

    return params.column.getColId() === EColumnId.VIDEO_TITLE ? menu : null;
  }

  onGridReady(params: any): void {
    console.log('params', params);
  }

  getMainMenuItems(params: GetMainMenuItemsParams): any {
    switch (params.column.getColId()) {
      case EColumnId.THUMBNAIL :
        console.log(EColumnId.THUMBNAIL);
        break;
      case EColumnId.PUBLISHED_ON :
        console.log(EColumnId.PUBLISHED_ON);
        break;
      default:
        console.log('default');
    }
  }

  isFirstColumn(params: any): any {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    return displayedColumns[0] === params.column;
  }

  onRowSelected(event: any): void {
    event.api.refreshHeader();
  }

}
