import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Activity as ActivityType } from 'use-lanyard';
import theme from '../Theme/Theme';

dayjs.extend(relativeTime);

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
        <h4
          style={{
            fontSize: '16px',
            color: `${theme.text.default}`,
            marginBottom: '3px',
          }}
        >
          {props.name}
        </h4>
        <WrapperText>{props.editing}</WrapperText>
        <WrapperText>{props.state}</WrapperText>
        <WrapperText>
          {dayjs(props.activity.timestamps?.start).fromNow(true)} elapsed
        </WrapperText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  width: 365px;
  height: 110px;
  top: 0;
  background-color: ${theme.card.background};
  border-radius: 8px;
  margin-right: 15px;
  margin-top: 15px;
  right: 0;
  position: absolute;
  pointer-events: none;
  align-items: center;
  display: flex;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const WrapperText = styled.p`
  font-size: 14px;
  padding: 1px;
  color: ${theme.text.default};
`;

export default Activity;
