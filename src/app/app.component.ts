import { Component, OnInit } from '@angular/core';
import { SocialTagsService } from './social-tags.service';
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public constructor(private tagsService: SocialTagsService,
        private titleService: Title) {
        this.tagsService.setTitleAndTags();
    }

    ngOnInit() {
        setTimeout(() => {
            this.titleService.setTitle('TsuKpa Blog');
        }, 100);
    }
}
