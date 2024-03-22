import React from 'react';
import Svg, { Path, Line } from 'react-native-svg';

const SpectacleIcon = ({ color, size }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <Path d="M10 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4z" />
    <Path d="M20 10v2a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-2" />
    <Line x1="8" y1="6" x2="8" y2="6" />
    <Line x1="16" y1="6" x2="16" y2="6" />
  </Svg>
);

export default SpectacleIcon;