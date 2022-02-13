import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // @Output() emitSearchText = new EventEmitter<string>();

  searchText: string = '';
  @Output() emitSearchText: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchCharacter(searchTxt: string) {
    this.emitSearchText.emit(searchTxt);
  }



}
