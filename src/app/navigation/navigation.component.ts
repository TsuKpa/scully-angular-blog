import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        let mainNav = document.getElementById('main-nav');
        let navbarToggle = document.getElementById('navbar-toggle');

        navbarToggle.addEventListener('click', function () {

            if (this.classList.contains('active')) {
                mainNav.style.display = "none";
                this.classList.remove('active');
            }
            else {
                mainNav.style.display = "flex";
                this.classList.add('active');

            }
        });

        // When the user scrolls the page, execute myFunction
        window.onscroll = function () { myFunction() };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
    }

}
