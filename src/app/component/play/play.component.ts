import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../global.service';
declare var $: any;


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.levelChanged(0);
    if (localStorage.getItem('name')) {
      this.globalService.userName = localStorage.getItem('name');
    }
    if (localStorage.getItem('level')) {
      this.globalService.dashboardArr = JSON.parse(localStorage.getItem('level'));
      this.globalService.isDashboard = true;
    }
  }

  dashboard(): void {
    if (localStorage.getItem('level')) {
      this.globalService.dashboardArr = JSON.parse(localStorage.getItem('level'));
      this.globalService.isDashboard = true;
    }
  }
}
