import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routes$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
    map((routes) => routes.filter((route) => {
      return route.route.includes('/blog/');
    }).sort((route1: any, route2: any) => {
      return (new Date(route2.createdDate).getTime() - new Date(route1.createdDate).getTime());
    })),
  );

  constructor(public scully: ScullyRoutesService,
    private titleService: Title) { }
  ngOnInit() { 
    this.titleService.setTitle('TsuKpa Blog');
  }
}
