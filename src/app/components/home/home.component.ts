import { Component, OnInit } from '@angular/core';
import mydata from 'src/assets/try.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string;
  public constellationObject = mydata.constellations;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
