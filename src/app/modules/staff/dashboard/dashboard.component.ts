import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dvd-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private _dbData:any = {};
  constructor(private _dashboardServ:DashboardService) { }

  ngOnInit() {
      this._dashboardServ.getDashboardData().subscribe((item)=>{        
        if(item[1].success){
          this._dbData[item[0]] = item[1].data;
        }else{
          console.warn(item[1].e.message);
        }
      }, console.error);
  }

}