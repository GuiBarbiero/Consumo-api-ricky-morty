import { Component, OnInit, Input, HostListener } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { ListEpisodesService } from 'src/app/core/services/episodes/list-episodes.service';
import { ManageCharactersService } from 'src/app/core/services/characters/manage-characters/manage-characters.service';
import { EpisodeRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interfaceEpisode';

@Component({
  selector: 'app-list-episodes-root',
  templateUrl: './list-episodes-root.component.html',
  styleUrls: ['./list-episodes-root.component.scss']
})
export class ListEpisodesRootComponent implements OnInit {
  @Input() dataCarde: any;

  infoApi: EpisodeRequesteInterface | undefined;
  listEpisode: Array<EpisodeInterface> = [];
  listFilteredEpisode: Array<EpisodeInterface> = [];
  isLoading: boolean = true;
  searchTerm: string = '';
  isLoadingScroll = false;
  nextPageUrl: string | null = 'https://rickandmortyapi.com/api/episode?page=1';

  constructor(
    private listEpisodesService: ListEpisodesService,
    private manageCharactersService: ManageCharactersService
  ) {}

  ngOnInit(): void {
    this.getEpisodes();
  }

  async getEpisodes() {
    try {
      const nextPageUrl = this.nextPageUrl || '';
      const data = await firstValueFrom<EpisodeRequesteInterface>(this.listEpisodesService.getEpisodeRequest(nextPageUrl));
      this.infoApi = data;
      this.nextPageUrl = data.info.next; // Atualizando a próxima página
      this.listEpisode = [...this.listEpisode, ...data.results];
      this.listFilteredEpisode = this.listEpisode;

      this.manageCharactersService.setListEpisodies(this.listFilteredEpisode);

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  }

  async loadSpecificPage(pageNumber: number) {
    this.isLoading = true;
    try {
      const url = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;
      const data = await firstValueFrom<EpisodeRequesteInterface>(this.listEpisodesService.getNextOrPrevEpisodies(url));
      this.infoApi = data;
      this.nextPageUrl = data.info.next;
      this.listEpisode = data.results;
      this.listFilteredEpisode = data.results;

      this.manageCharactersService.setListEpisodies(this.listFilteredEpisode);

      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    } catch (err) {
      this.isLoading = false;
      console.error(err);
    }
  }

  async loadMoreEpisodes() {
    if (this.nextPageUrl && !this.isLoadingScroll) {
      this.isLoadingScroll = true;
      try {
        const nextUrl = this.nextPageUrl;
        const data = await firstValueFrom<EpisodeRequesteInterface>(this.listEpisodesService.getNextOrPrevEpisodies(nextUrl));
        this.infoApi = data;
        this.nextPageUrl = data.info.next;
        this.listEpisode = [...this.listEpisode, ...data.results];
        this.listFilteredEpisode = this.listEpisode;

        setTimeout(() => {
          this.filterEpisodes();
          this.isLoadingScroll = false;
        }, 1000);
      } catch (error) {
        this.isLoadingScroll = false;
        console.error(error);
      }
    }
  }

  onInputChange(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterEpisodes();
  }

  filterEpisodes() {
    this.listFilteredEpisode = this.listEpisode.filter((episode: EpisodeInterface) => {
      const episodeName = episode.name.toLowerCase();
      return episodeName.includes(this.searchTerm.toLowerCase());
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= scrollHeight - 200 && !this.isLoadingScroll) {
      this.loadMoreEpisodes();
    }
  }
}