import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

declare var $;

@Component({
  selector: 'dvd-app-grid',
  templateUrl: './grid.component.html',
  styles: [`
     .table {
          table-layout:fixed;
      }

      .table td {
          max-width:120px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {

  @Input("currentPage") private _currentPage: number;
  @Input("limit") private _limit: number;
  @Input("data") private _data: any = [];
  @Output("onInteract") private _emitter: EventEmitter<any> = new EventEmitter();

  constructor(private _eleRef: ElementRef) { }

  ngOnInit(): void {}


  onInteract(dir) {
    this._emitter.emit(dir);
  }

}
