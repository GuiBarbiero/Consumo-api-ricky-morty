import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
import { EpisodeInterface } from 'src/app/core/interfaces/Episodes/episodes.interface';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';
import { ManageCharactersService } from 'src/app/core/services/characters/manage-characters/manage-characters.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent {
  id: number | undefined;
  character: CharacterInterface | undefined;
  error: boolean = false;
  favorite: boolean = false;
  favoriteList: Array<CharacterInterface> = [];
  firstEpisode: EpisodeInterface | undefined;
  finalEpisode: EpisodeInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private manageCharactersService: ManageCharactersService,
    private router: Router
  ) {

    // Retrieve favorite characters from local storage
    const storedFavorites = localStorage.getItem('favoriteList');
    this.favoriteList = storedFavorites ? JSON.parse(storedFavorites) : [];

    // Subscribe to route params to get the character ID and fetch character details
    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      // Fetch character details and initialize
      firstValueFrom(this.manageCharactersService.getOnlyCharacter(this.id))
        .then((data: CharacterInterface) => {
          this.character = data;
          this.initializeCharacter();
          this.loadEpisodes();
        })
        .catch((error) => {
          this.error = true;
        });
    });
  }

  // Load episodes related to the character
  loadEpisodes() {
    if (this.character && this.character.episode.length > 0) {
      const firstEpisodeUrl = this.character.episode[0];
      const lastEpisodeUrl = this.character.episode[this.character.episode.length - 1];

      forkJoin([
        this.manageCharactersService.getEpisodeByUrl(firstEpisodeUrl),
        this.manageCharactersService.getEpisodeByUrl(lastEpisodeUrl)
      ])
      .subscribe(
        ([firstEpisode, finalEpisode]: [EpisodeInterface, EpisodeInterface]) => {
          this.firstEpisode = firstEpisode;
          this.finalEpisode = finalEpisode;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  // Initialize the favorite status of the character
  initializeCharacter() {
    this.favorite = this.favoriteList.some((char) => char.id === this.character?.id);
  }

    // Toggle the favorite status of the character
  onFavorite(): void {
    this.favorite = !this.favorite;

    if (this.favorite === false) {
      this.removeFromFavorites();
    } else if(this.favorite === true) {
      this.addToFavorites();
    }
  }

  // Add the character to the favorites list
  addToFavorites(): void {
    const isCharacterAlreadyFavorited = this.favoriteList.find(
      (char) => char.id === this.character?.id
    );
    if (!isCharacterAlreadyFavorited) {
      this.favoriteList.push(this.character!);
      localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));
    }
  }

  // Remove the character from the favorites list
  removeFromFavorites(): void {
    const updatedList = this.favoriteList.filter((char) => char.id !== this.character?.id);
    localStorage.setItem('favoriteList', JSON.stringify(updatedList));
  }


  // Navigate back to the list of characters
  onClick() {
    this.router.navigate(['home/list-characters']);
  }
}
