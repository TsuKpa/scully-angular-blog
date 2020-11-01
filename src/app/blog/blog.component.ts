import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HighlightService } from './../highlight.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    preserveWhitespaces: true,
})
export class BlogComponent implements OnInit, AfterViewChecked {

    isProd: boolean;
    constructor(
        private highlightService: HighlightService,
    ) {
    }

    ngOnInit() {
        this.isProd = environment.production;
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
