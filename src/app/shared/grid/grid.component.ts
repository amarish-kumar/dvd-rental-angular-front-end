import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

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
  `]
})
export class GridComponent implements OnInit {

  @Input("currentPage") private _currentPage: number;
  @Input("limit") private _limit: number;
  @Input("data") private _data: any = [];
  @Output("onInteract") private _emitter: EventEmitter<any> = new EventEmitter();

  @ViewChild("myname") ele:ElementRef;
  private _table: any = null;

  constructor(private _eleRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["_data"] && changes["_data"].currentValue !== changes["_data"].previousValue) {
      this._table !== null && this._table.clear();
    }
  }

  ngAfterContentChecked() {
    /*console.info(this.ele);
    if (this._table === null && this.ele) {      
      this._table = $(this.ele.nativeElement).DataTable({
        "scrollX": true,
        "bPaginate": false,
        "bLengthChange": false,
        "bFilter": false,
        "bInfo": false,
      });

    }*/
  }


  ngOnDestroy() {
    this._table !== null && this._table.destroy();
  }

  onInteract(dir) {
    this._emitter.emit(dir);
  }

}
