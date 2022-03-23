import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.scss']
})
export class Component01Component implements OnInit {

  constructor() {
    console.log('User - Component01Component');
  }

  ngOnInit(): void {
  }

}
