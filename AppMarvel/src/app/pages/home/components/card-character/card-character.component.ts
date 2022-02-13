import { Component, Input, OnInit } from '@angular/core';
import { ResultMarvelI } from 'src/app/models/marvel.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {
  @Input() character: ResultMarvelI;
  constructor() { }

  ngOnInit(): void {
  }

}
