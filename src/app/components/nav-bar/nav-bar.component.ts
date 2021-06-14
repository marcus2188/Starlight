import { Component, OnInit } from '@angular/core';
import mydata from 'src/assets/try.json';

@Component({
  selector: 'navigation-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert(mydata["constellations"][0]["description"])
  }

}
