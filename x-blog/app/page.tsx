import SongComponent from "../components/SongComponents";

const metadata = {
  title: "Song Title",
  artists: ["Artist 1", "Artist 2"],
  artists_avatar_url: ["https://picsum.photos/200", "https://picsum.photos/200"],
  cover_art_url: "https://picsum.photos/200",
  description: "This is a song description",
  genre: "Pop",
  album: "Album Name",
  release_year: 2022,
  tags: ["Tag 1", "Tag 2"],
};

export default function Home() {
  return (
    <div>
      <SongComponent song={metadata} />
    </div>
  );
}
