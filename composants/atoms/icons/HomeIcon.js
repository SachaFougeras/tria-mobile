import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

export default function HomeIcon({ color, size }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
      <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z" />
      <Polyline points="9 22 9 12 15 12 15 22" stroke="red" />
    </Svg>
  );
}