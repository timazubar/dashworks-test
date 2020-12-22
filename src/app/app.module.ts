import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveComponentModule} from '@ngrx/component';

import {AppComponent} from './app.component';
import {GridComponent} from './components/grid/grid.component';
import {ThumbnailRendererComponent} from './components/cell-renderers/thumbnail-renderer/thumbnail-renderer.component';
import {DateRendererComponent} from './components/cell-renderers/date-renderer/date-renderer.component';
import {TitleRendererComponent} from './components/cell-renderers/title-renderer/title-renderer.component';
import {TextRendererComponent} from './components/cell-renderers/text-renderer/text-renderer.component';
import {HeaderCheckboxComponent} from './components/header-renderers/header-checkbox/header-checkbox.component';
import {ButtonToggleComponent} from './components/status-bar-components/button-toggle/button-toggle.component';
import {GridEffects} from './store/grid.effects';
import {reducers} from './store/grid.state';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ThumbnailRendererComponent,
    DateRendererComponent,
    TitleRendererComponent,
    TextRendererComponent,
    HeaderCheckboxComponent,
    ButtonToggleComponent
  ],
  imports: [
    AgGridModule.withComponents([ButtonToggleComponent]),
    BrowserModule,
    HttpClientModule,
    ReactiveComponentModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([GridEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
