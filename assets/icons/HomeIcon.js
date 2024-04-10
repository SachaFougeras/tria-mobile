import React from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

export default function HomeIcon({ color, size }) {
  return (
<Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18 17V8.5C18 8.34475 17.9639 8.19164 17.8944 8.05279C17.825 7.91393 17.7242 7.79315 17.6 7.7L10.6 2.45C10.4269 2.32018 10.2164 2.25 10 2.25C9.78363 2.25 9.5731 2.32018 9.4 2.45L2.4 7.7C2.2758 7.79315 2.175 7.91393 2.10557 8.05279C2.03614 8.19164 2 8.34475 2 8.5V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13H11C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4804 17.8946 12.7348 18 13 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17Z" stroke={color} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

  );
}