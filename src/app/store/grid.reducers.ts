import * as gridActions from '../store/grid.actions';
import {RowItem} from '../interfaces';

export interface GridState {
  gridData: RowItem[] | null;
  loading: boolean;
  error: boolean;
}

export const INIT_STATE: GridState = {
  gridData: null,
  loading: false,
  error: false
};

export function reducer(state: GridState = INIT_STATE, action: gridActions.Actions): GridState {
  switch (action.type) {
    case gridActions.LOAD_DATA:
      return { ...state, loading: true };
    case gridActions.LOAD_DATA_SUCCESS:
      return { ...state, loading: false, gridData: action.payload };
    case gridActions.LOAD_DATA_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const getDataSuccess = (state: GridState) => state.gridData;
export const getDataLoading = (state: GridState) => state.loading;
export const getDataFail = (state: GridState) => state.error;
