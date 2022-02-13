import { Pipe, PipeTransform } from '@angular/core';
import { ResultMarvelI } from 'src/app/models/marvel.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(characters: ResultMarvelI[], page: number = 0, searchTxt: string = ''): ResultMarvelI[] {
    // Paginator
    if (!searchTxt) return characters.slice(page, page + 6);

    // Search Character
    searchTxt = searchTxt.toLowerCase();
    const filterCharacters = characters.filter(character => character.name.toLowerCase().includes(searchTxt));
    return filterCharacters.slice(page, page + 6);
  }

}
