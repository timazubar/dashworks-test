import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.scss']
})
export class DateRendererComponent implements ICellRendererAngularComp {

  public date!: Date;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.date = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
