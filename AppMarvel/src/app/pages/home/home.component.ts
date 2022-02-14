import { Component, OnInit } from '@angular/core';
import { ResultMarvelI } from 'src/app/models/marvel.interface';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataCharacters: ResultMarvelI[] = [];
  public page: number = 0;
  public searchText: string = "";

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.marvelService.getCharacters().subscribe(res => {
      this.dataCharacters = res.data.results;
    }, error => console.log('ERROR:', error));
  }

  searchCharacter(searchTxt: string) {
    this.page = 0;
    this.searchText = searchTxt;
  }

  prevPage() {
    if (this.page > 0) this.page -= 6;
  }

  nextPage() {
    this.page += 6;
  }

}

