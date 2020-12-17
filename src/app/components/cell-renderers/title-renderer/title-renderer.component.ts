import {Component, ViewChild} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {MatMenuTrigger} from '@angular/material/menu';

import {Snippet} from '../../../interfaces';

@Component({
  selector: 'app-title-renderer',
  templateUrl: './title-renderer.component.html',
  styleUrls: ['./title-renderer.component.scss']
})
export class TitleRendererComponent implements ICellRendererAngularComp {

  public snippet!: Snippet;
  public contextMenuPosition = { x: '0px', y: '0px' };
  public linkUrl!: string;
  private youtubeBaseUrl = 'https://www.youtube.com/watch?v=';

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.snippet = params.data.snippet;
    this.linkUrl = this.youtubeBaseUrl + params.data.id.videoId;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  onContextMenuClick(event: MouseEvent): void {
    event.preventDefault();
    this.contextMenuPosition.x = event.offsetX + 'px';
    this.contextMenuPosition.y = event.offsetY + 'px';
    this.contextMenu.openMenu();
  }

  openInNewTab(): void {
    window.open(this.linkUrl, '_blank');
  }
}
