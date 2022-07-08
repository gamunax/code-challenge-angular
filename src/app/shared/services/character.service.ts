import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@enviroment';
import { Observable } from 'rxjs';

import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page = 1): Observable<Character> {
    const url = `${environment.baseUrlApi}/character/?page=${page}`;
    return this.http.get<Character>(url);
  }

  getCharacterByName(name = '', page = 1): Observable<Character> {
    const url = `${environment.baseUrlApi}/character/?name=${name}&page=${page}`;
    return this.http.get<Character>(url);
  }
}
