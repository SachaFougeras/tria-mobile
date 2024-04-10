import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const TheatreIcon = ({ color, size }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <Circle cx="12" cy="10" r="3" />
    <Path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
  </Svg>
);

export default TheatreIcon;