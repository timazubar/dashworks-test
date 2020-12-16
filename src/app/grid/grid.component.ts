import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ApiData, Snippet} from '../interfaces';
import {GridDataService} from './grid-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { field: '' },
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
          const formattedSnippets = snippets.map(snippet => {
            return {
              img: snippet.thumbnails.default,
              publishedAt: snippet.publishedAt,
              title: snippet.title,
              description: snippet.description
            };
          });
          console.log('snippets', snippets.slice(0, 10));
          return snippets.slice(0, 10);
        }),
      );
  }

}
