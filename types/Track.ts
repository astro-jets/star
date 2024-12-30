export interface Track {
  _id?: string;
  title: string;
  artist: string;
  featuring?: string[] | null;
  producers?: string[] | null;
  videographers?: string[] | null;
  categories?: string[];
  audioURL: string;
  videoURL?: string | null;
  albumArtURL?: string | null;
  albumID?: string | null;
}
