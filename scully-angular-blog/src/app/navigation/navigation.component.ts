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
  }

}
