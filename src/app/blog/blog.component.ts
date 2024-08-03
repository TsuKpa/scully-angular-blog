import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocialTagsService } from '../social-tags.service';
import { HighlightService } from './../highlight.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    preserveWhitespaces: true,
})
export class BlogComponent implements OnInit, AfterViewChecked {

    isProd: boolean;
    tags: {
        content: string;
        color: string;
    }[] = [];
    date: string = "";

    constructor(
        private highlightService: HighlightService,
        private socialTagService: SocialTagsService,
    ) {
    }

    ngOnInit() {
        this.isProd = environment.production;
        window.scroll({
            top: 0,
            left: 0
        });
        const colors = ['#1D5D9B', '#0079FF', '#0B666A', '#435B66' ];
        this.socialTagService.currentPost.subscribe((post: any) => {
            if (post) {
                this.tags = post.tags?.map((tag, index) => {
                    return {
                        content: tag,
                        color: colors[index]
                    }
                });

                this.date = post.createdDate || "";
            }
        });
    }

    ngAfterViewChecked() {
        this.highlightService.highlightAll();
    }
}
