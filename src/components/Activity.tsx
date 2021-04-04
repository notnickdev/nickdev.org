import React from 'react';
import styled from 'styled-components';
import { Activity as ActivityType } from 'use-lanyard';
interface ActivityProps {
  activity: ActivityType;
  name: string;
  editing: string | any;
  state: string;
}

const Activity: React.FunctionComponent<ActivityProps> = props => {
  const ActivityLogoImage = ({ activity }: { activity: ActivityType }) => {
    if (!activity.assets) return null;

    try {
      const imageSrc:
        | string
        | any = `https://cdn.discordapp.com/app-assets/${BigInt(
        activity.application_id
      ).toString()}/${activity.assets.large_image}.png`;

      return (
        <img
          src={imageSrc}
          alt={activity.assets.large_text}
          width="70"
          style={{
            borderRadius: '14px',
          }}
        />
      );
    } catch (e) {
      return null;
    }
  };

  return (
    <Container>
      <ActivityLogoImage activity={props.activity} />
      <Wrapper>
        <h4 style={{ fontSize: '17px' }}>{props.name}</h4>
        <WrapperText>{props.editing}</WrapperText>
        <WrapperText>{props.state}</WrapperText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  width: 350px;
  height: 100px;
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
  margin-left: 20px;
`;

const WrapperText = styled.p`
  font-size: 15px;
`;

export default Activity;
