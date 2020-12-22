import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {IThumbnailParams} from '../../../interfaces';

@Component({
  selector: 'app-thumbnail-renderer',
  templateUrl: './thumbnail-renderer.component.html',
  styleUrls: ['./thumbnail-renderer.component.scss']
})
export class ThumbnailRendererComponent implements ICellRendererAngularComp {

  public thumbnailParams!: IThumbnailParams;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.thumbnailParams = params.value;
  }

  refresh(params: any): boolean {
    return false;
  }

}
