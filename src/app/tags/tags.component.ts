import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

    routes$: Observable<ScullyRoute[]>;

    constructor(
        public scully: ScullyRoutesService,
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            
            this.routes$ = this.scully.available$.pipe(
                map((routes) => routes.filter((route) => {
                    return route.route.includes('/blog/') && route.tags.indexOf(params.keyword) !== -1;
                }).sort((route1, route2) => {
                    return (new Date(route2.createdDate).getTime() - new Date(route1.createdDate).getTime());
                })),
            );
            this.routes$.subscribe(data => {
                if (!data?.length) {
                    this.router.navigate(["/not-found"]);
                }
            })
        });
        window.scroll({ top: 0, left: 0 });
        this.titleService.setTitle('TsuKpa\'s Blog');
    }
}
