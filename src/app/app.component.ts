import { Component } from '@angular/core';
import { SocialTagsService } from './social-tags.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(private tagsService: SocialTagsService) {
        this.tagsService.setTitleAndTags();
    }
}
