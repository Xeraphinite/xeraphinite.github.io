interface Metadata {
  title: string;
  description: string;
  datePublished: Date;
  dateModified: Date;
  tags?: string[];
  coverImageUrl: string;
}

interface SongProps extends Metadata {
  artists: string[];
  artistsAvatarUrl: string[];
  genre: string;
  album: string;
  releaseYear: number;
  myComment?: string;
}


// export interface { SongProp };