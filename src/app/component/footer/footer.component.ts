import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
