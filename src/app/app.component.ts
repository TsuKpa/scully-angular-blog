import { ToggleDarkThemeService } from './toggle-dark-theme.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { SocialTagsService } from './social-tags.service';
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public constructor(private tagsService: SocialTagsService,
        private titleService: Title,
        private toggleDarkThemeService: ToggleDarkThemeService,
        private renderer: Renderer2) {
        this.tagsService.setTitleAndTags();
    }

    ngOnInit() {
        setTimeout(() => {
            this.titleService.setTitle('TsuKpa Blog - Nam Quang Nguyen');
        }, 110);
        this.toggleDarkThemeService.isToggle$.subscribe(toggle => {
            if (toggle) {
                this.renderer.addClass(document.body, 'dark-theme');
            } else {
                this.renderer.removeClass(document.body, 'dark-theme');
            }
        });
    }
}
