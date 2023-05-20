import { ToggleDarkThemeService } from './../toggle-dark-theme.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor(private toggleDarkThemeService: ToggleDarkThemeService) {}

    isHide = true;
    isDarkMode: boolean;

    ngOnInit(): void {
        window.onscroll = function () { myFunction() };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
        if (localStorage.length) {
            this.isDarkMode = localStorage.getItem("isDarkMode") === "true" ? true : false;
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
