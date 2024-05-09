import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { ListEpisodesService } from 'src/app/core/services/episodes/list-episodes.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu-episode.component.html',
  styleUrls: ['./card-menu-episode.component.scss']
})
export class CardeMenuComponent {
  @Input() dataCarde: EpisodeInterface;
  // Default character object to prevent potential null reference errors
  constructor(private router: Router, private listEpisodesService: ListEpisodesService) {
  
    this.dataCarde = {
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: ''
    };
  }
  // Function called when the "Ver Mais" button is clicked
  onClickEpisode() {
    this.router.navigate(['home/episode-details', this.dataCarde!.id]);
  }
}
