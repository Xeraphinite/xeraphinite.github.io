interface SongMetadata {
  title: string;
  artists: string[];
  artists_avatar_url: string[];
  cover_art_url: string;
  description: string;
  genre: string;
  album?: string;
  release_year?: number;
  tags?: string[];
}

interface SongProps {
  song: SongMetadata;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import React from "react";
import { cn } from "@/lib/utils";

const SongComponent: React.FC<SongProps> = ({ song }) => {
  return (
    <Card
      className={cn(
        "md:flex",
        "m-4 p-8 min-w-96 max-w-screen-2xl",
        "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", // blur Effect
        "hover:shadow-md transition-shadow"
      )}
    >
      <img
        src={song.cover_art_url}
        className={cn("w-40 rounded-xl", "md:w-52 md:h-52")}
      />
      <CardHeader>
        <CardTitle className="my-2 font-bold">{song.title}</CardTitle>
        <div className="my-4 space-x-2">
          <Badge variant="default"> {song.genre} </Badge>
          {song.tags?.map((tag) => (
            <Badge variant="secondary"> {tag} </Badge>
          ))}
        </div>
        <div className={cn("flex item-center", "space-x-4", "my-4", "py-6")}>
          {song.artists.map((artist) => (
            <div>
              <div
                className={cn(
                  "hidden",
                  "md:space-x-4 md:flex md:items-center",
                  "my-4"
                )}
              >
                <Avatar>
                  <AvatarImage
                    src={song.artists_avatar_url[song.artists.indexOf(artist)]}
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <CardDescription className="text-gray-700">
                  {artist}
                </CardDescription>
              </div>
              <div
                className={cn("flex md:hidden items-center my-4")}
              >
                {artist},&nbsp;
              </div>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription
          className={cn("text-md", "text-gray-800", "dark:text-gray-200")}
        >
          {song.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default SongComponent;
