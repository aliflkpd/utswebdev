import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string = 'Andi Alif Lakipadada Norman';
  id: string = '42030077';
  major: string = 'Teknologi Informasi';
  inname:string = '';
  inid:string = '';
  inmajor:string = '';
  constructor() {}
  ngOnInit(): void {
    throw new Error('Error');
  }

  onProfile() {
    this.name = this.inname
    this.id = this.inid
    this.major = this.inmajor
  }
}
