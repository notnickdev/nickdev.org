import React from "react";
import styled from "styled-components";

const SpotifyCardContainer = styled.div`
  padding: 10px;
  width: 350px;
  height: 120px;
  top: 0;
  background-color: #d3dacf;
  border-radius: 8px;
  margin-right: 15px;
  margin-top: 15px;
  right: 0;
  position: absolute;
  pointer-events: none;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpotifyCardImage = styled.img`
  width: 80px;
  border-radius: 25%;
  height: 80px;
  margin-right: 16px;
`;

interface SpotifyCardProps {
  song: string;
  artist: string;
  image: string;
}

const SpotifyCard: React.FunctionComponent<SpotifyCardProps> = (props) => {
  return (
    <SpotifyCardContainer>
      <SpotifyCardImage src={props.image} />
      <Wrapper>
        <h4 style={{ fontSize: "18px" }}>Listening to Spotify</h4>
        <h4>
          <span style={{ color: "#1DB954" }}>{props.song}</span>
        </h4>
        <p style={{ fontSize: "13px", color: "#533f65" }}>
          by {props.artist.replace(";", ", ")}
        </p>
      </Wrapper>
    </SpotifyCardContainer>
  );
};

export default SpotifyCard;
