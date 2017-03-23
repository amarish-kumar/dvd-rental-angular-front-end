import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ElementRef } from '@angular/core';

declare var $;

@Component({
  selector: 'dvd-app-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements OnInit {

  @Input("currentPage") private _currentPage: number;
  @Input("limit") private _limit: number;
  @Input("data") private _data: any;
  @Output("onInteract") private _emitter: EventEmitter<any> = new EventEmitter();

  private _table: any = null;

  constructor(private _eleRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {    
    this._table !== null && this._table.clear();    
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {

    if (this._table === null) {      
      this._table = $(this._eleRef.nativeElement).find("table").DataTable({
        "scrollX": true,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bInfo": false,
      });
    }

  }

  ngOnDestroy() {
    this._table !== null && this._table.clear();
  }

  onInteract(dir) {
    this._emitter.emit(dir);
  }

}
