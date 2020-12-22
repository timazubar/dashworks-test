import {ActionReducerMap, createSelector} from '@ngrx/store';

import * as fromGrid from './grid.reducers';
import {Actions} from './grid.actions';
import {GridState} from './grid.reducers';

/**
 * Top level state declaration
 */
export interface State {
  grid: fromGrid.GridState;
}

// Map of the reducers
export const reducers: ActionReducerMap<State, Actions> = {
  grid: fromGrid.reducer
};

export const getGridState = (state: State) => state.grid;

export const selectGridData = createSelector(
  getGridState,
  (state: GridState) => state.gridData
);
