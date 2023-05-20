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
    isDarkMode = false;

    ngOnInit(): void {
        window.onscroll = function () { myFunction() };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
    }

    toggleDarkTheme($event) {
        this.toggleDarkThemeService.toggle($event);
    }

    hideMainNav() {
        this.isHide = !this.isHide;
    }
}
