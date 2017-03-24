import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'dvd-Categories',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Categories</h1>
            <dvd-app-grid [limit]="_limit" [currentPage]="_page" (onInteract)="onInteraction($event)" [data]="_categories"></dvd-app-grid>
        </div>
    </div>
  `,
  styles: []
})
export class CategoriesComponent implements OnInit {

  private _categories: any[] = null;
  private _limit:number = 15;
  private _page:number = 0;
  
  constructor(private _categoriesServ: CategoriesService) { }

  ngOnInit() {
    this.getAllCategories({ limit: this._limit, offset: this._page });
  }

  getAllCategories(data:{ limit: number, offset: number}){
    this._categoriesServ.getAllCategories({ limit: data.limit, offset: data.offset }).subscribe((res) => {      
      this._categories = res.data || [];
    });
  }

  onInteraction(dir:string){
    
    this._page = dir === "next" ? this._page + 15 : this._page - 15;
    this._page = Math.max(this._page, 0);

    this.getAllCategories({ limit: this._limit, offset: this._page });

  }

}
