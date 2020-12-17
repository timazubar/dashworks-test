import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import {ReactiveComponentModule} from '@ngrx/component';

import {AppComponent} from './app.component';
import {GridComponent} from './components/grid/grid.component';
import {GridDataService} from './services/grid-data.service';
import { ThumbnailRendererComponent } from './components/cell-renderers/thumbnail-renderer/thumbnail-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ThumbnailRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
