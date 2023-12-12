import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-serials-icon',
  templateUrl: './grid-serials-icon.component.html',
  styleUrls: ['./grid-serials-icon.component.css']
})
export class GridSerialsIconComponent implements OnInit,ICellRendererAngularComp {
  //implements OnInit,

  constructor() { }refresh(params: any): boolean {

    return true;
  }
  agInit(params: any): void {
  }
  ngOnInit(): void {
  }

}

