import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-text-renderer',
  templateUrl: './text-renderer.component.html',
  styleUrls: ['./text-renderer.component.scss']
})
export class TextRendererComponent implements ICellRendererAngularComp {

  public description!: string;

  constructor() { }

  agInit(params: ICellRendererParams): void {
    this.description = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

}
