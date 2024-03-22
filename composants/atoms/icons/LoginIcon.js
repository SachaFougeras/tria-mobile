import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LoginIcon = ({ color, size }) => (
<Svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1 19V18C1 14.6863 3.68629 12 7 12H11C14.3137 12 17 14.6863 17 18V19" stroke={color} stroke-width="3" stroke-linecap="round"/>
<Path d="M9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9Z" stroke={color} stroke-width="3" stroke-linecap="round"/>
</Svg>
);

export default LoginIcon;