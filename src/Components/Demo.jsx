/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import { Loki } from 'lokify';

import themeSong from '../assets/lokiTheme.mp3';
import useAudioEnabled from '../hooks/useAudioEnabled';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #06070b;
`;

const Demo = () => {
  const audioEnabled = useAudioEnabled();

  return (
    <Container>
      <Loki />
      { audioEnabled && <audio src={themeSong} autoPlay />}
    </Container>
  );
};

export default Demo;
