import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import mydata from 'src/assets/try.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  routeSub: Subscription;
  public constellationObject = mydata.constellations;
  public constellationFound: Observable<{name:string;entity:string;description:string;skyarea:string;brightest_star:string;associations:string;family:string;}>;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnDestroy(): void {
    if(this.routeSub){
      this.routeSub.unsubscribe();
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params)=>{
      this.getConstelDetails(params["name"]);
    });
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

  getConstelDetails(namestr:string):void{
    this.constellationFound = of(this.constellationObject.find(x => x.name==namestr));
  }

}
