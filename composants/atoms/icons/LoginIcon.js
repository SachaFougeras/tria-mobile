import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const LoginIcon = ({ color, size }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height={size} width={size}>
    <Circle cx="12" cy="7" r="4" />
    <Path d="M12 21v-6m0 0V11m0 10a8 8 0 0 0 8-8 8 8 0 0 0-16 0 8 8 0 0 0 8 8z" />
  </Svg>
);

export default LoginIcon;