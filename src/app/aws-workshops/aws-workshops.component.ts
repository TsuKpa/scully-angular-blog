import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkShop, workshops, listCertificates, Certificate } from './aws-workshops-data';

@Component({
  selector: 'app-aws-workshops',
  templateUrl: './aws-workshops.component.html',
  styleUrls: ['./aws-workshops.component.scss'],
})
export class AWSWorkshopsComponent implements OnInit {

  listWorkshops: WorkShop[];
  listCertificates: Certificate[];

  constructor(private titleService: Title) {
    this.listWorkshops = [...workshops];
    this.listCertificates = [...listCertificates];
  }

  ngOnInit(): void {
    this.titleService.setTitle('AWS Workshops - TsuKpa Blog');
  }

  openBadge(badgeUrl: string) {
    window.open(badgeUrl, '_blank');
  }
}
