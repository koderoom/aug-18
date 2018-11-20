import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = "AUG-18";
  bgRef:any;
  bgList = [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, {"ID":3, "BG": "bg-info", "BTN":"btn-info"}, {"ID":1, "BG": "bg-secondary", "BTN":"btn-secondary"}];
  randomIndex = Math.floor((Math.random() * 4));

  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  BASE_URL_DEMO:string;
  EXAM_LIST:any[];
  TOPLIST:any[];

  constructor(
    public data: DataService,
    public dataexam: DataexamService
  ) { }

  ngOnInit(): void {
    this.bgRef = this.bgList[this.randomIndex];

    this.CARD_LIST = this.data.CARD_LIST;
    this.FEATURED_LIST = this.data.FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = this.data.FEATURED_ANGULAR_LIST;

    this.BASE_URL_DEMO = this.dataexam.BASE_URL_DEMO;
    this.EXAM_LIST = this.dataexam.EXAM_LIST;
    this.TOPLIST = this.dataexam.B2LIST.concat(this.dataexam.B1LIST);
  }

  
  uilayout(bgRef) {
    bgRef = bgRef || this.bgList[this.randomIndex];
    this.bgRef = bgRef;
  }

}
