import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GetContextMenuItemsParams, GridOptions, MenuItemDef} from 'ag-grid-community';
import 'ag-grid-enterprise';
import {Store} from '@ngrx/store';

import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {TitleRendererComponent} from '../cell-renderers/title-renderer/title-renderer.component';
import {DateRendererComponent} from '../cell-renderers/date-renderer/date-renderer.component';
import {TextRendererComponent} from '../cell-renderers/text-renderer/text-renderer.component';
import {HeaderCheckboxComponent} from '../header-renderers/header-checkbox/header-checkbox.component';
import {ButtonToggleComponent} from '../status-bar-components/button-toggle/button-toggle.component';
import {selectGridData, State} from '../../store/grid.state';
import {EColumnId, RowItem} from '../../interfaces';
import {filter, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: []
})
export class GridComponent implements OnInit {

  gridOptions: GridOptions = {
    defaultColDef: {
      flex: 1,
      wrapText: true,
      autoHeight: true,
      sortable: true,
      resizable: true,
      suppressMenu: true,
    },
    statusBar: {
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
    },
    frameworkComponents: {
      buttonToggleComponent: ButtonToggleComponent
    },
    suppressRowClickSelection: true,
    rowSelection: 'multiple',
    applyColumnDefOrder: true,
    context: {
      gridComponent: this
    }
  };


  columnDefs = [
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

  colDefsWithCheckbox = [
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


  rowData$!: Observable<RowItem[] | null>;
  selectionToggle$!: BehaviorSubject<boolean>;

  rowDataLength?: number;

  constructor(private store: Store<State>) {
    this.rowData$ = store.select(selectGridData).pipe(
      filter(value => value !== null),
      tap(items => this.rowDataLength = items?.length)
    );
  }

  ngOnInit(): void {
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

  onRowSelected(event: any): void {
    event.api.refreshHeader();
  }
}
