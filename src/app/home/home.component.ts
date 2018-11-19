import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    data: DataService
  ) { }

  

}
