import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';

@Component({
  selector: 'app-dacexam',
  templateUrl: './dacexam.component.html',
  styleUrls: ['./dacexam.component.css']
})
export class DacexamComponent implements OnInit {

  title = "AUG-18";
  bgRef:any;
  bgList = [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, {"ID":3, "BG": "bg-info", "BTN":"btn-info"}, {"ID":1, "BG": "bg-secondary", "BTN":"btn-secondary"}];
  randomIndex = Math.floor((Math.random() * 4));

  BASE_URL_DEMO:string;
  EXAM_LIST:any[];
  B1LIST:any[];
  B2LIST:any[];

  constructor(
    public data: DataService,
    public dataexam: DataexamService
  ) { }


  ngOnInit(): void {
    this.bgRef = this.bgList[this.randomIndex];

    this.BASE_URL_DEMO = this.dataexam.BASE_URL_DEMO;
    this.EXAM_LIST = this.dataexam.EXAM_LIST;

    this.B1LIST = this.dataexam.B1LIST;
    this.B2LIST = this.dataexam.B2LIST;
  }

  
  uilayout(bgRef) {
    bgRef = bgRef || this.bgList[this.randomIndex];
    this.bgRef = bgRef;
  }

}
