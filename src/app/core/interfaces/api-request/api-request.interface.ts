import { CharacterInterface } from "../characters/character.interface";

export interface ApiRequesteInterface {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<CharacterInterface>;
}
