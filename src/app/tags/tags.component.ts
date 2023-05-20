import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        private titleService: Title
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.routes$ = this.scully.available$.pipe(
                map((routes) => routes.filter((route) => {
                    return route.route.includes('/blog/') && route.tags.indexOf(params.keyword) !== -1;
                })),
            )
        });
        window.scroll({ top: 0, left: 0});
        this.titleService.setTitle('TsuKpa Blog')
    }
}
