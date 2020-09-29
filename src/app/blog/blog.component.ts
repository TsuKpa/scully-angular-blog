import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from './../highlight.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    preserveWhitespaces: true,
})
export class BlogComponent implements OnInit, AfterViewChecked {

    constructor(
        private highlightService: HighlightService,
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
