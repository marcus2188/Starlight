import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import mydata from 'src/assets/try.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public order: string;
  public constellationObject = mydata.constellations;
  public constellationList: Observable<Array<{name:string;entity:string;description:string;skyarea:string;brightest_star:string;associations:string;family:string;}>>;
  private routeSub: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params)=>{
      if(params["constellation-search"]){
        this.searchConstels("Name","Ascending",params["constellation-search"]);
      }else{
        this.searchConstels("Name", "", "");
      }
    });
  }
  searchConstels(sort: string, order?: string, search?: string):void{
    if(sort == "Name" || !sort){
      if(order == "Descending"){
        this.constellationObject.sort((a,b)=>(a.name < b.name)? 1 : -1);
      }else{
        this.constellationObject.sort((a,b)=>(a.name > b.name)? 1 : -1);
      }
    }else{
      if(sort == "Entity"){
        if(order == "Descending"){
          this.constellationObject.sort((a,b)=>(a.entity < b.entity)? 1 : -1);
        }else{
          this.constellationObject.sort((a,b)=>(a.entity > b.entity)? 1 : -1);
        }
      }else{
        if(order == "Descending"){
          this.constellationObject.sort((a,b)=>(a.family < b.family)? 1 : (a.family === b.family)? ((a.name > b.name)? 1 : -1) : -1);
        }else{
          this.constellationObject.sort((a,b)=>(a.family > b.family)? 1 : (a.family === b.family)? ((a.name > b.name)? 1 : -1) : -1);
        }
      }
    }
    this.constellationList = of(this.constellationObject);
  }
  openDetails(name: string):void{
    this.router.navigate(["details", name]);
  }

  ngOnDestroy():void{
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
