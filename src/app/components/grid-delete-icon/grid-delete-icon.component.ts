import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-delete-icon',
  templateUrl: './grid-delete-icon.component.html',
  styleUrls: ['./grid-delete-icon.component.css'],
})
export class GridDeleteIconComponent
  implements OnInit, ICellRendererAngularComp
{
  constructor() {}

  ngOnInit(): void {}
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: any): void {}
}
