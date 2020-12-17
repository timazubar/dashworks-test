import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ApiData, Snippet} from '../../interfaces';
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
    { field: '', cellRendererFramework: ThumbnailRendererComponent },
    { field: 'Published On', cellRendererFramework: DateRendererComponent },
    { field: 'Video Title', cellRendererFramework: TitleRendererComponent },
    { field: 'Description', cellRendererFramework: TextRendererComponent }
  ];

  defaultColDef = {
    flex: 1,
    wrapText: true,
    autoHeight: true,
    sortable: true,
    resizable: true,
  };

  rowData$!: Observable<Snippet[]>;

  constructor(private gridDataService: GridDataService) { }

  ngOnInit(): void {
    this.rowData$ = this.gridDataService.getApiData<ApiData>()
      .pipe(
        map((allData: ApiData): any => {
          const snippets = allData.items.map((item) => item.snippet);
          console.log('snippets', snippets.slice(0, 10));
          return snippets.slice(0, 10);
        }),
      );
  }

}
