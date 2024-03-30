import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeLast, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SocialTagsService {

    public constructor(private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private scully: ScullyRoutesService,
        private meta: Meta) {
    }

    readonly tagDescription: string = 'A blog about programming and software development, writing about Angular, NodeJS, Javascript, Typescript, UI, UX';
    // readonly tagImage: string = 'assets/logo.png';
    readonly urlPrefix: string = 'https://tsukpa.netlify.app/';
    readonly siteName: string = 'TsuKpa\'s Blog';
    // readonly userTwitter: string = '@tsukpa';
    currentPost = new Subject();

    setTitleAndTags() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            filter(route => route.outlet === 'primary')
        ).subscribe(() => {
            this.scully.getCurrent().subscribe(
                link => {
                    setTimeout(() => {
                        this.currentPost.next(link);
                    }, 500);
                    
                    this.meta.updateTag({ name: 'twitter:url', content: this.urlPrefix + this.router.url });
                    this.meta.updateTag({ name: 'og:url', content: this.urlPrefix + this.router.url });
                    this.meta.updateTag({ name: 'og:site_name', property: 'og:site_name', content: this.siteName });
                    // this.meta.updateTag({ name: 'twitter:creator', content: this.userTwitter });
                    // this.meta.updateTag({ name: 'twitter:site', content: this.userTwitter });
                    if (link?.title) {
                        this.titleService.setTitle(link.title + ' | ' + (link.author || 'TsuKpa'));
                        this.meta.updateTag({ name: 'description', content: link.description });
                        this.meta.updateTag({ name: 'og:title', property: 'og:title', content: link.title || 'TsuKpa Blog'});
                        this.meta.updateTag({ name: 'og:description', property: 'og:description', content: link.description });
                        this.meta.updateTag({ name: 'og:type', property: 'og:type', content: 'article'});
                        this.meta.updateTag({ name: 'og:image', content: link.photo });
                        this.meta.updateTag({ name: 'article:published_time', content: new Date(link.createdDate).toISOString() });
                        this.meta.updateTag({ name: 'article:modified_time', content: link.lastmod });
                        
                        this.meta.updateTag({ name: 'article:section', property: 'article:section', content: (link.tags as string[])[0] });
                        this.meta.updateTag({ name: 'twitter:title', content: link.title.substring(0, 69) });
                        this.meta.updateTag({ name: 'twitter:description', content: (link.description as string).substring(0, 123) });
                        this.meta.updateTag({ name: 'twitter:image', content: this.urlPrefix + '/' + link.photo });
                    } else {
                        this.titleService.setTitle(this.data.title);
                        const description = this.data.desc ? this.data.desc : this.tagDescription;
                        this.meta.updateTag({ name: 'description', content: description || 'TsuKpa Blog' });
                        // this.meta.updateTag({ name: 'image', content: this.urlPrefix + '/' + this.tagImage });
                        this.meta.updateTag({ name: 'og:title', content: this.data.title || 'TsuKpa Blog' });
                        this.meta.updateTag({ name: 'og:description', content: description || 'TsuKpa Blog' });
                        this.meta.updateTag({ name: 'og:type', content: 'website' });
                        this.meta.updateTag({ name: 'og:image', content: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIJpx-vFLp90XHqqQAuRwEGM2e8DnrKNf52-zYGqcwCuLhFnAxVMjQdmmN8vCS9YaLqZWmg6fmFBQDVnI6FlLbXnYJdrKvAxlVHY9QjWYrdAmebYQFZKllmkgrrEJdlkUHwXq8ururuWwpmS0YU2QROlY4CGxdyl1cb60sfl7EsI-jQe2KoolvySzLsg/s16000/Group%2028.png"});
                        // this.meta.updateTag({ name: 'twitter:title', content: this.data.title });
                        // this.meta.updateTag({ name: 'twitter:description', content: description.substring(0, 123) });
                        // this.meta.updateTag({ name: 'twitter:image', content: this.urlPrefix + '/' + this.tagImage });
                    }
                });
        });
    }

    private get data() { return this.activatedRoute.snapshot.firstChild.data; }
}