import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public skyarea: number = 0;
  constructor() { }

  ngOnInit(): void {

  }
  getColor(value: number):string{
    if(value > 3.0){
      return "#5ee432";
    }else if(value > 2){
      return "#fffa50";
    }else if(value > 1){
      return "#f7aa38";
    }else{
      return "#ef4655";
    }
  }

}
