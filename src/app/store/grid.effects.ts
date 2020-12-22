import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, startWith, switchMap} from 'rxjs/internal/operators';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

import * as gridActions from './grid.actions';
import {GridDataService} from '../services/grid-data.service';
import {mapToRowData} from '../utils/mapToRowData';
import {RowItem} from '../interfaces';
import {State} from './grid.state';

@Injectable()
export class GridEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private gridDataService: GridDataService
  ) {}

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(gridActions.LOAD_DATA),
    startWith(new gridActions.LoadDataAction()),
    switchMap(() =>
      this.gridDataService.getData().pipe(
        mapToRowData(),
        map((rowItems: RowItem[]) => new gridActions.LoadDataSuccessAction(rowItems)),
        catchError(err => of(new gridActions.LoadDataFailAction(err)))
      )
    ),
  ));
}
