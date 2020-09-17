import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  //public
  public links$: Observable<ScullyRoute[]>;
  public activeLink: string;
  public isProduction: boolean = environment.production;
  public readonly TITLE = `<Coffee/> House`;

  //private
  private unsubscribeAll: Subject<any>;

  constructor(private scully: ScullyRoutesService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {    
    this.links$ = this.scully.available$
      .pipe(
        map((scullys) => scullys.sort((a, b) => a.route.localeCompare(b.route)))
      )
    this.scully.getCurrent()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((scullyRoute) => this.activeLink = scullyRoute?.route || '/');
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
