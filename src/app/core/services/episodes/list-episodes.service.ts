import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { ApiRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interface';
import { EpisodeRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interfaceEpisode';



@Injectable({
  providedIn: 'root'
})
export class ListEpisodesService {
  private baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodeRequest(url: string = this.baseUrl): Observable<EpisodeRequesteInterface> {
    return this.http.get<EpisodeRequesteInterface>(url);
  }

  getNextOrPrevEpisodies(url: string): Observable<EpisodeRequesteInterface> {
    return this.http.get<EpisodeRequesteInterface>(url);
  }
}