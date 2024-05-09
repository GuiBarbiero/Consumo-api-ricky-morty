import { EpisodeInterface } from "../Episodes/episodes.interface";

export interface EpisodeRequesteInterface {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<EpisodeInterface>;
}
