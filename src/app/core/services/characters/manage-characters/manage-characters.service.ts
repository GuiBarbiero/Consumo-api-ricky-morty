import { Injectable } from '@angular/core';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';
import { ListCharactersService } from '../list-characters/list-characters.service';
import { Observable } from 'rxjs';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { ListEpisodesService } from '../../episodes/list-episodes.service';


@Injectable({
  providedIn: 'root'
})
export class ManageCharactersService {

  constructor(private listCharactersServices: ListCharactersService, private listEpisodeServices: ListEpisodesService) { }

  private _listCharacters: Array<CharacterInterface> = [];
  private _listEpisodies: Array<EpisodeInterface> = [];

  public get getlistCharacters(): Array<CharacterInterface> {
    return this._listCharacters;
  }
  public setListCharacters(value: Array<CharacterInterface>) {
    this._listCharacters = value;
  }

  public getOnlyCharacter(id: number): Observable<CharacterInterface> {
    return this.listCharactersServices.getOnlyCharacter(id);
  }

  public  getEpisodeByUrl(url: string): Observable<EpisodeInterface>{
    return this.listCharactersServices.getEpisodies(url);
  }
  public setListEpisodies(value: Array<EpisodeInterface>) {
    this._listEpisodies = value;
  }
  public get getlistEpisodies(): Array<EpisodeInterface> {
    return this._listEpisodies;
  }
}
