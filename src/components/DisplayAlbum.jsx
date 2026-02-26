import React from "react";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useParams } from "react-router-dom";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} alt="" />
            <b>Spotify</b> • 3,789,490 likes • <b>20 songs,</b> about 2 Uhrs
          </p>
        </div>
      </div>

};

export default DisplayAlbum;
