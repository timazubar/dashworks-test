import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AgGridModule} from 'ag-grid-angular';

import { GridComponent } from './grid.component';
import {GridDataService} from '../../services/grid-data.service';


describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridModule.withComponents([]), HttpClientTestingModule],
      declarations: [ GridComponent ],
      providers: [ GridDataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
