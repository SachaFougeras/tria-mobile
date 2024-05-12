import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

export default function HomeIcon({ color, size }) {
  return (
<Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4 21V9L12 3L20 9V21H14V14H10V21H4Z" stroke={color}/>
</Svg>

  );
}