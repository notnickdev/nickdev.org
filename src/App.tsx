import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import Main from "./components/Main";
import Footer from "./components/Footer";
import SpotifyCard from "./components/SpotifyCard";
import { time } from "node:console";

const Wrapper = styled.div`
  display: flex;
`;

interface StateTypes {
  twitter: string;
  github: string;
  linkedin: string;
  email: string;
  keybase: string;
}

interface SpotifyData {
  data: Object;
}

const App = () => {
  const [socials, setSocials] = useState<StateTypes[] | any>([
    { twitter: "https://twitter.com/notnickdev" },
    { github: "https://github.com/notnickdev" },
    { linkedin: "https://www.linkedin.com/in/nicholas-n-5a9187195/" },
    { email: "thisnotnicholas@gmail.com" },
    { keybase: "https://keybase.io/nick241" },
  ]);

  const [spotifyData, setSpotifyData] = useState<any>({
    data: null,
    show: false,
  });

  const fetchSpotifyData = () => {
    axios
      .get("https://api.lanyard.rest/v1/users/463449066672619520")
      .then((res: any) => {
        setSpotifyData({ data: res, show: true });
      })
      .catch((error) => setSpotifyData({ data: null, show: false }));
  };

  useEffect(() => {
    fetchSpotifyData();
    setSpotifyData({ show: true });
  }, []);

  const fetchNewSongData = () => {
    if (spotifyData.show) {
      // const timestamp: number =
      //   spotifyData.data.data.data.spotify.timestamps.end;
      // var milliSeconds = Math.floor(Date.now() / timestamp);
      // console.log(milliSeconds);
    }
  };

  console.log(spotifyData);
  fetchNewSongData();

  return (
    <Wrapper>
      {spotifyData.show && (
        <SpotifyCard
          song={spotifyData.data.data.data.spotify.album}
          artist={spotifyData.data.data.data.spotify.artist}
          image={spotifyData.data.data.data.spotify.album_art_url}
        />
      )}

      <Main
        twitter={socials[0].twitter}
        github={socials[1].github}
        linkedin={socials[2].linkedin}
        email={socials[3].email}
        keybase={socials[4].keybase}
      />
      <Footer />
    </Wrapper>
  );
};

export default App;
