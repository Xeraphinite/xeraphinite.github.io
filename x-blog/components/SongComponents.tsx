interface SongMetadata {
  // song metadata
  title: string;
  genre: string;
  // artist metadata
  artists: string[];
  artists_avatar_url: string[];
  // album or reference metadata
  album?: string;
  release_year?: number;
  cover_art_url: string;
  // other metadata
  description: string;
  tags?: string[];
  listen_urls?: string[];
  listen_data?: string[];
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
      {/* Cover Art */}
      <img
        src={song.cover_art_url}
        alt={song.title}
        className={cn(
          "aspect-video rounded-xl",
          "md:w-52 md:h-52",
          "group-hover:scale-130 transition-transform duration-400 ease-in-out"
        )}
      />
      <CardHeader>
        <CardTitle className="my-2 font-bold">
          {song.title}
          <span className={cn("text-gray-400 text-sm")}> ({song.release_year}) </span>
        </CardTitle>
        {
          song.album && (
            <div className="flex items-center space-x-2">
              <CardDescription className="text-gray-700">
                {song.album}
              </CardDescription>
            </div>
          )
        }
        {/* Genre and Tags */}
        <div className="my-4 space-x-2">
          <Badge variant="default"> {song.genre} </Badge>
          {song?.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {" "}
              {tag}{" "}
            </Badge>
          ))}
        </div>
        {/* Artists */}
        <div className={cn("flex item-center", "space-x-4", "my-4", "py-2")}>
          {song.artists.map((artist) => (
            <div key={artist}>
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
            </div>
          ))}
        </div>
        <CardDescription
          className={cn("text-md", "text-gray-800", "dark:text-gray-200")}
        >
          {song.description}
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default SongComponent;
