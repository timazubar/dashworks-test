import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {Snippet} from '../../../interfaces';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.scss']
})
export class DateRendererComponent implements ICellRendererAngularComp {

  public snippet!: Snippet;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.snippet = params.data;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
