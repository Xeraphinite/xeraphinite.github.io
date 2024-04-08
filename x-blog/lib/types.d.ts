interface ContentComponentMetadata {
  /* 
   * The types of the component.
   * 组件的类型，用于区分不同的组件。
   * post: 内容相对较少的文章
   * blog: 博客文章，内容相对较多
   * song: 歌曲
   * video: 视频
   * gallery: 图库，包括一些相对 memorial 的图
   */
  type: "fragments" | "song" | "video" | "post" | "blog";
  /* 
   * The title of the component.
   * 默认组件的标题，一般是组件内容中标识组件的成分。比如：在歌曲组件中，歌名即为 `title`。
   */
  title: string;
  /* 
   * The description of the component.
   * 默认组件的描述，一般是组件内容的简要描述。比如：在歌曲组件中，歌曲的描述即为 `description`。
   */
  description: string;
  /* 
   * The date when the component was published.
   * 组件发布的日期。
   */
  datePublished: Date;
  /* 
   * The date when the component was last modified.
   * 组件最后一次修改的日期。
   */
  dateModified: Date;
  /* 
   * The tags of the component.
   * 组件的标签。
   */
  tags?: null | string[];
}

interface SongProps extends ComponentMetadata {
  type: "song";
  /* 
   * The artists of the song.
   * 歌曲的歌手。
   */
  artists: string[];
  /* 
   * The artists' avatar URLs.
   * 歌手的头像 URL。
   */
  artistsAvatarUrl: string[];
  /* 
   * The genre of the song.
   * 歌曲的流派。
   */
  genre: string;
  /* 
   * The album of the song.
   * 歌曲所在专辑。
   */
  album: string;
  /* 
   * The release year of the song.
   * 歌曲发布的年份。
   */
  releaseYear: number;
}