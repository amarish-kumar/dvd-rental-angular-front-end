import { Directive, ElementRef } from '@angular/core';
import { Input, OnInit } from '@angular/core';


declare var jQuery: any;

@Directive({
    selector: '[data-table]'
})

export class Ng2DataTable implements OnInit {

    private _datatable: any = null;
    @Input("options") private _options: any;

    constructor(private _element: ElementRef) { }

    ngOnInit() { 
        console.info("ng init..");
    }
    
    ngAfterViewInit() {
        console.info("ngAfterViewInit..");
        if(this._datatable === null){
            this._datatable = jQuery(this._element.nativeElement).DataTable(this._options || {
                "scrollX": true,
                "bPaginate": false,
                "bLengthChange": false,
                "bFilter": false,
                "bInfo": false,
            });
        }
    }



    ngOnDestroy() {
        if (this._datatable)
            this._datatable.destroy();
        this._datatable = null;  
        console.info("ngOnDestroy..");      
    }

}