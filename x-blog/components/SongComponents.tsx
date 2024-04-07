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
        "flex flex-col",
        "w-96",
        "shadow-sm",
        "hover:shadow-md transition-shadow"
      )}
    >
      <CardHeader>
        <CardTitle>{song.title}</CardTitle>
        <div className={cn(
          "flex item-center", "space-x-4"
        )}>
          {song.artists.map((artist) => (
            <div className={cn("flex items-center", "space-x-2")}>
              <Avatar>
                <AvatarImage
                  src={song.artists_avatar_url[song.artists.indexOf(artist)]}
                />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <CardDescription>{artist}</CardDescription>
            </div>
          ))}
        </div>
        <CardDescription>{song.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge> {song.genre} </Badge>
        {song.tags?.map((tag) => (
          <Badge variant="secondary"> {tag} </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default SongComponent;
