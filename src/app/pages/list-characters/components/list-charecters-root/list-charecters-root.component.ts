import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiRequesteInterface } from 'src/app/core/interfaces/api-request/api-request.interface';
import { CharacterInterface } from 'src/app/core/interfaces/characters/character.interface';
import { ListCharactersService } from 'src/app/core/services/characters/list-characters/list-characters.service';
import { ManageCharactersService } from 'src/app/core/services/characters/manage-characters/manage-characters.service';

@Component({
  selector: 'app-list-charecters-root',
  templateUrl: './list-charecters-root.component.html',
  styleUrls: ['./list-charecters-root.component.scss']
})
export class ListCharectersRootComponent implements OnInit {

  mockData = Array.from({ length: 20 });
  infoApi: ApiRequesteInterface | undefined;
  listCharacters: Array<CharacterInterface> = [];
  listFilteredCharacters: Array<CharacterInterface> = [];
  isLoading: boolean = true;
  searchTerm: string = '';
  isLoadingScroll = false;

  constructor(
    private listCharacterService: ListCharactersService,
    private manageCharactersService: ManageCharactersService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    firstValueFrom<ApiRequesteInterface>(this.listCharacterService.getCharacters())
      .then((data) => {
        // Initialize listCharacters, infoApi, and listFilteredCharacters
        this.listCharacters = data.results;
        this.infoApi = data;
        this.listFilteredCharacters = data.results;

        // Set listFilteredCharacters in manageCharactersService
        this.manageCharactersService.setListCharacters(this.listFilteredCharacters);

        // Set a timeout to simulate loading time and update isLoading
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      })
      .catch((err) => console.log(err));
  }

  onInputChange(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterCharacters();
  }

  filterCharacters() {
    // Filter characters based on the search input
    this.listFilteredCharacters = this.listCharacters.filter((character: CharacterInterface) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(this.searchTerm.toLowerCase());
    });
  }

  onScroll() {
    if (this.infoApi?.info.next) {
      this.isLoadingScroll = true;
      // Fetch next set of characters when scrolling
      firstValueFrom(this.listCharacterService.getNextOrPrevCharacters(this.infoApi.info.next))
        .then((data) => {
          this.infoApi = data;
          const newCharacters = data.results;

          // Combine existing characters with new characters
          this.listCharacters = [...this.listCharacters, ...newCharacters];

          setTimeout(() => {
                      // Filter characters based on the search input
          this.listFilteredCharacters = this.listCharacters.filter((character: CharacterInterface) => {
            const characterName = character.name.toLowerCase();
            return characterName.includes(this.searchTerm.toLowerCase());
          });
          this.isLoadingScroll = false;
          }, 1000);
        })
        .catch((error) => {
          this.isLoadingScroll = false;
          console.log(error);
        });
    }
  }

}
