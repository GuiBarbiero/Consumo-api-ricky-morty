import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { ApiRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interface';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';


@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {

  private baseUrl: string = 'https://rickandmortyapi.com/api/character';


  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiRequesteInterface> {
    return this.http.get<ApiRequesteInterface>(this.baseUrl);
  }


  getNextOrPrevCharacters(baseUrl: string): Observable<ApiRequesteInterface> {
    return this.http.get<ApiRequesteInterface>(baseUrl);
  }

  getOnlyCharacter(id: number): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(`${this.baseUrl}/${id}`);
  }

  getEpisodies(url: string): Observable<EpisodeInterface>{
    return this.http.get<EpisodeInterface>(`${url}`);
  }

}
