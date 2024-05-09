import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../../../../core/interfaces/characters/character.interface';


@Component({
  selector: 'app-list-favorites-root',
  templateUrl: './list-favorites-root.component.html',
  styleUrls: ['./list-favorites-root.component.scss'] // Corrigido: styleUrls em vez de styleUrl
})
export class ListFavoritesRootComponent implements OnInit {
  listCharacters: CharacterInterface[] = []; // Adicione a lista de personagens favoritos
  listFilteredCharacters: CharacterInterface[] = [];

  ngOnInit(): void {
    // Recuperar favoritos do Local Storage
    const storedFavorites = localStorage.getItem('favoriteList');
    this.listCharacters = storedFavorites ? JSON.parse(storedFavorites) : [];
    // Inicializar a lista filtrada com todos os personagens favoritos
    this.listFilteredCharacters = this.listCharacters;
  }

  onInputChange(event: any) {
    const search = (event.target as HTMLInputElement).value;
    this.listFilteredCharacters = this.listCharacters.filter((character: CharacterInterface) => {
      const characterName = character.name.toLowerCase();
      return characterName.includes(search.toLowerCase());
    });
  }
}
