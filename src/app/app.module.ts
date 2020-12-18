import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import {ReactiveComponentModule} from '@ngrx/component';

import {AppComponent} from './app.component';
import {GridComponent} from './components/grid/grid.component';
import {GridDataService} from './services/grid-data.service';
import { ThumbnailRendererComponent } from './components/cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import { DateRendererComponent } from './components/cell-renderers/date-renderer/date-renderer.component';
import { TitleRendererComponent } from './components/cell-renderers/title-renderer/title-renderer.component';
import { TextRendererComponent } from './components/cell-renderers/text-renderer/text-renderer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import { HeaderCheckboxComponent } from './components/header-renderers/header-checkbox/header-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ThumbnailRendererComponent,
    DateRendererComponent,
    TitleRendererComponent,
    TextRendererComponent,
    HeaderCheckboxComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule,
    NoopAnimationsModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [GridDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
