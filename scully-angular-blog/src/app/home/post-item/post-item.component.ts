import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

    @Input() blog: BlogData;

    constructor() { }

    ngOnInit(): void {
        console.log(this.blog);
    }

}


interface BlogData {
    route: string;
    title: string;
    description: string;
    authors: string[];
    published: boolean;
    topics: string[];
    tags: string[];
    tweet: string;
    createdDate: string;
}
