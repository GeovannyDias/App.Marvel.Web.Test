import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RootObjectMarvelI } from '../models/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  pathServer: string = environment.serverDomain + environment.port;
  constructor(private http: HttpClient) { }
  getCharacters() {
    const pathUrl = this.pathServer + '/v1/public/characters' + environment.authKey;
    return this.http.get<RootObjectMarvelI>(pathUrl);
  }



}
