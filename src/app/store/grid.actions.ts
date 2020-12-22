import {Action} from '@ngrx/store';

import {RowItem} from '../interfaces';

export const LOAD_DATA = '[Grid] Load Data';
export const LOAD_DATA_SUCCESS = '[Grid] Load Data Success';
export const LOAD_DATA_FAIL = '[Grid] Load Data Fail';

/**
 * Load Data Actions
 */
export class LoadDataAction implements Action {
  readonly type = LOAD_DATA;
}

export class LoadDataSuccessAction implements Action {
  readonly type = LOAD_DATA_SUCCESS;

  constructor(public payload: RowItem[]) { }
}

export class LoadDataFailAction implements Action {
  readonly type = LOAD_DATA_FAIL;

  constructor(public payload: any) { }
}

export type Actions
  = LoadDataAction
  | LoadDataSuccessAction
  | LoadDataFailAction;
