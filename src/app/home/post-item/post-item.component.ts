import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

    @Input() blog: BlogData;

    constructor(
    ) { }
}


export interface BlogData {
    route: string;
    title: string;
    description: string;
    authors: string;
    published: boolean;
    topics: string[];
    tags: string[];
    tweet: string;
    createdDate: string;
}
