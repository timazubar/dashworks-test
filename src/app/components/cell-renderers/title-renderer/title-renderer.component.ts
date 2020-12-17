import {Component, ViewChild} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-title-renderer',
  templateUrl: './title-renderer.component.html',
  styleUrls: ['./title-renderer.component.scss']
})
export class TitleRendererComponent implements ICellRendererAngularComp {

  public title!: { title: string; videoId: string };
  public linkUrl!: string;
  private youtubeBaseUrl = 'https://www.youtube.com/watch?v=';

  @ViewChild(MatMenuTrigger)
  contextMenu!: MatMenuTrigger;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.title = params.value.title;
    this.linkUrl = this.youtubeBaseUrl + params.value.videoId;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  openInNewTab(): void {
    window.open(this.linkUrl, '_blank');
  }
}
