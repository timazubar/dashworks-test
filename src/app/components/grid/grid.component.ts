import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {GetContextMenuItemsParams, MenuItemDef} from 'ag-grid-community';
import 'ag-grid-enterprise';

import {ApiData, EColumnId, RowItem} from '../../interfaces';
import {GridDataService} from '../../services/grid-data.service';
import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {TitleRendererComponent} from '../cell-renderers/title-renderer/title-renderer.component';
import {DateRendererComponent} from '../cell-renderers/date-renderer/date-renderer.component';
import {TextRendererComponent} from '../cell-renderers/text-renderer/text-renderer.component';
import {HeaderCheckboxComponent} from '../header-renderers/header-checkbox/header-checkbox.component';
import {ButtonToggleComponent} from '../status-bar-components/button-toggle/button-toggle.component';
import {mapToRowData} from '../../utils/mapToRowData';

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

  colDefsWithCheckbox  =  [
    {
      field: 'checkbox',
      headerName: '',
      minWidth: '50',
      maxWidth: '50',
      headerComponentFramework: HeaderCheckboxComponent,
      checkboxSelection: true,
      suppressMenu: true,
      headerValueGetter: () => this.rowDataLength,
      aggFunc: 'sum'
    },
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
    suppressMenu: true,
  };

  rowData$!: Observable<RowItem[]>;
  selectionToggle$!: BehaviorSubject<boolean>;

  rowDataLength!: number;
  statusBar: any;
  frameworkComponents = {
    buttonToggleComponent: ButtonToggleComponent
  };

  constructor(private gridDataService: GridDataService) {
    this.statusBar = {
      statusPanels: [
        {
          statusPanel: 'buttonToggleComponent',
          align: 'left'
        },
        {
          statusPanel: 'agTotalRowCountComponent',
          align: 'left',
        },
        {
          statusPanel: 'agSelectedRowCountComponent',
          align: 'left'
        },
      ],
    };
  }

  ngOnInit(): void {
    // TODO: use real data
    /*this.rowData$ = this.gridDataService.getApiData<ApiData>()
      .pipe(
        map((allData: ApiData): Item[] => {
          console.log('allData', allData.items);
          return allData.items;
        })
      );*/

    this.rowData$ = this.gridDataService.getMockData<ApiData>().pipe(
      tap(({items}) => this.rowDataLength = items.length),
      mapToRowData()
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

  onGridReady(event: any): void {
    this.selectionToggle$ = event.api.getStatusPanel('buttonToggleComponent')?.getFrameworkComponentInstance().selectionToggle$;
  }

  isFirstColumn(params: any): any {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    return displayedColumns[0] === params.column;
  }

  onRowSelected(event: any): void {
    event.api.refreshHeader();
  }
}
