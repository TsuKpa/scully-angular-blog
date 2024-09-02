import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aws-workshops',
  templateUrl: './aws-workshops.component.html',
  styleUrls: ['./aws-workshops.component.scss'],
})
export class AWSWorkshopsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('AWS Workshops - TsuKpa Blog');
  }

}
