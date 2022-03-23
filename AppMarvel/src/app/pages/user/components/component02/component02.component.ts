import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component02',
  templateUrl: './component02.component.html',
  styleUrls: ['./component02.component.scss']
})
export class Component02Component implements OnInit {

  constructor() { 
    console.log('User - Component02Component');
  }

  ngOnInit(): void {
  }

}
