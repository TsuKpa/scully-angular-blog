import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkShop, workshops } from './aws-workshops-data';

@Component({
  selector: 'app-aws-workshops',
  templateUrl: './aws-workshops.component.html',
  styleUrls: ['./aws-workshops.component.scss'],
})
export class AWSWorkshopsComponent implements OnInit {

  listWorkshops: WorkShop[];

  constructor(private titleService: Title) {
    this.listWorkshops = [...workshops];
  }

  ngOnInit(): void {
    this.titleService.setTitle('AWS Workshops - TsuKpa Blog');
  }

}
