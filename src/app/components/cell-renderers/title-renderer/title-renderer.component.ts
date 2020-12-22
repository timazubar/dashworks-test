import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

import {IVideoTitleParams} from '../../../interfaces';

@Component({
  selector: 'app-title-renderer',
  templateUrl: './title-renderer.component.html',
  styleUrls: ['./title-renderer.component.scss']
})
export class TitleRendererComponent implements ICellRendererAngularComp {

  public titleParams!: IVideoTitleParams;
  public linkUrl!: string;
  private youtubeBaseUrl = 'https://www.youtube.com/watch?v=';

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.titleParams = params.value;
    this.linkUrl = this.youtubeBaseUrl + params.value.videoId;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
