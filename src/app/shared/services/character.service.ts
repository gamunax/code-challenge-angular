import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character> {
    const url = `${environment.baseUrlApi}/character/?page=1`;
    return this.http.get<Character>(url);
  }

  searchCharacters(query = '', page = 1): Observable<Character> {
    console.log(query);
    const url = `${environment.baseUrlApi}/character/?name=${query}&page=${page}`;
    console.log(url);
    return this.http.get<Character>(url);
  }
}
