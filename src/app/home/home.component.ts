import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';
import { AppConstantsService } from 'src/app/common/app-constants.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title:string;
  bgRef:any;
  bgList:any;
  faYoutube = faYoutube;
  randomIndex = Math.floor((Math.random() * 4));

  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  BASE_URL_DEMO:string;
  EXAM_LIST:any[];
  TOPLIST:any[];

  constructor(
    public appConstatnts: AppConstantsService,
    public data: DataService,
    public dataexam: DataexamService
  ) { }

  ngOnInit(): void {
    this.title = this.appConstatnts.TITLE;

    this.bgList = this.appConstatnts.BG_LIST;
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
