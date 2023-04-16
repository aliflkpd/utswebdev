import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  menuItems = [
    { title: 'Post', link: '/post' },
    { title: 'Profile', link: '/profile' },
    { title: 'Settings', link: '/settings' }
  ];
}

