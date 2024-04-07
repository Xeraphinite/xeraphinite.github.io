import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import SongComponent from "../components/SongComponents";

const metadata = {
  title: "Song Title",
  artists: ["Artist 1", "Artist 2", "Lana Del Ray"],
  artists_avatar_url: [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ],
  cover_art_url: "https://picsum.photos/640",
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
      {/* <img src={"https://picsum.photos/1920/1080"} alt="placeholder" /> */}
    </div>
  );
}
