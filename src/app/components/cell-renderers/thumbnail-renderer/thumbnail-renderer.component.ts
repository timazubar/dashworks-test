import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {Thumbnails} from '../../../interfaces';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss']
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {

  public thumbnails!: Thumbnails;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.thumbnails = params.data.snippet.thumbnails;
  }

  refresh(params: any): boolean {
    return false;
  }

}
