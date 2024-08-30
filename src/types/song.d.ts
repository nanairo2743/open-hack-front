import { ErrorResponse } from "react-router-dom";

export type AccountAlinePostRequest = {
  spotify_data: SpotifyData;
  display_name: string;
  user_id: string;
};

export type SongData = {
  song_title: string;
  song_artist: string;
  overlap: number;
};

export type SpotifyData = {
  [playlistName: string]: SongData[];
};

export type AccountAlinePostResponse = {
  states: string;
};

export type RoomAccessPostRequest = {
  pass: string;
  display_name: string;
  user_id: string;
};

export type RoomAccessPostResponse = {
  states: string;
  display_names: DisplayNames[];
};

export type RoomJoinPostRequest = {
  pass: string;
  display_name: string;
  user_id: string;
};

export type RoomJoinPostResponse = {
  states: string;
};

export type RoomGetPostRequest = {
  pass: string;
  display_name: string;
  user_id: string;
};

export type RoomGetPostResponse = {
  display_names: DisplayName[];
  song_data: SongData[];
};

type DisplayName = {
  display_name: string;
  user_id: string;
};

export type ErrorResponse = {
  states: string;
  error: string;
};
