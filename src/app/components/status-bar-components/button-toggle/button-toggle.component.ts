import {Component} from '@angular/core';
import {IStatusPanelAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, IStatusPanelParams} from 'ag-grid-community';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements IStatusPanelAngularComp {

  public params!: IStatusPanelParams;

  selectionToggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
    console.log('gui params', params);
  }

  onChange(event: boolean): void {
    this.selectionToggle$.next(event);
  }
}
