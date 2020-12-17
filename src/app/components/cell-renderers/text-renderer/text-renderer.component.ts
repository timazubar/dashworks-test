import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {Snippet} from '../../../interfaces';

@Component({
  selector: 'app-text-renderer',
  templateUrl: './text-renderer.component.html',
  styleUrls: ['./text-renderer.component.scss']
})
export class TextRendererComponent implements ICellRendererAngularComp {

  public snippet!: Snippet;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.snippet = params.data.snippet;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

}
