import { ToggleDarkThemeService } from './../toggle-dark-theme.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor(private toggleDarkThemeService: ToggleDarkThemeService) { }

    isHide = true;
    isDarkMode: boolean;

    ngOnInit(): void {
        window.onscroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("my-bar").style.width = scrolled + "%";
        };

        if (localStorage.length) {
            this.isDarkMode = localStorage.getItem("isDarkMode") === "true";
            if (this.isDarkMode) {
                this.toggleDarkThemeService.toggle(this.isDarkMode);
            }
        }
    }

    toggleDarkTheme($event: any) {
        this.isDarkMode = $event.target.checked;
        this.toggleDarkThemeService.toggle(this.isDarkMode);
        localStorage.setItem("isDarkMode", '' + this.isDarkMode);
    }

    hideMainNav() {
        this.isHide = !this.isHide;
    }
}
