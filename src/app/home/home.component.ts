import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    data: DataService,
    dataexam: DataexamService
  ) { 
    console.log(dataexam.EXAM_LIST);
  }

  

}
