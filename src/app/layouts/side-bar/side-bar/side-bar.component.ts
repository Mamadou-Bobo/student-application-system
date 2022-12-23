import { Component, OnInit } from '@angular/core';
import { RouteInfo } from 'src/app/model/RouteInfo';

export const ROUTES: RouteInfo[] = [
  { path: '/application', title: 'Application', icon: 'fas fa-university', userRole: ['ROLE_APPLICANT'] },
  { path: '/documents', title: 'Documents', icon: 'fas fa-file', userRole: ['ROLE_APPLICANT'] },
  { path: '/application-details', title: 'Application Details', icon: 'fas fa-file-alt', userRole: ['ROLE_APPLICANT'] },
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  menuItems: RouteInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(item => item);
  }

}
