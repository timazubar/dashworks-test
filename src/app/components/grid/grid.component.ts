import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ApiData, Snippet} from '../../interfaces';
import {GridDataService} from '../../services/grid-data.service';
import {ThumbnailRendererComponent} from '../cell-renderers/thumbnail-renderer/thumbnail-renderer.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { field: '', cellRendererFramework: ThumbnailRendererComponent },
    { field: 'Published On' },
    { field: 'Video Title' },
    { field: 'Description' }
  ];
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

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
