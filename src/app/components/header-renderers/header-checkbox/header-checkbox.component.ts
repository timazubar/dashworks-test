import {Component} from '@angular/core';
import {IHeaderAngularComp} from 'ag-grid-angular';
import {IHeaderParams} from 'ag-grid-community';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent implements IHeaderAngularComp {

  allSelected = false;
  public params!: IHeaderParams;

  constructor() { }

  agInit(params: IHeaderParams): void {
    this.params = params;
    this.allSelected = this.params.api.getSelectedRows().length === +this.params.displayName;
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

  onChange(event: any): void {
    event ? this.params.api.selectAll() : this.params.api.deselectAll();
  }
}
