/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconHot: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M315.733333 1019.733333c46.933333 17.066667 64-25.6 42.666667-42.666666-64-42.666667-93.866667-123.733333-72.533333-192 25.6-76.8 85.333333-110.933333 85.333333-230.4 0 0 76.8 59.733333 64 149.333333 76.8-89.6 42.666667-209.066667 25.6-264.533333 200.533333 106.666667 375.466667 337.066667 174.933333 537.6-25.6 21.333333 0 55.466667 34.133334 42.666666 546.133333-311.466667 132.266667-776.533333 64-832 25.6 55.466667 25.6 140.8-21.333334 183.466667C635.733333 64 430.933333 0 430.933333 0c25.6 162.133333-89.6 337.066667-196.266666 469.333333-4.266667-68.266667-8.533333-110.933333-38.4-170.666666-8.533333 115.2-98.133333 209.066667-123.733334 328.533333-29.866667 157.866667 25.6 273.066667 243.2 392.533333z"
        fill={getIconColor(color, 0, '#FF3333')}
      />
    </Svg>
  );
};

IconHot.defaultProps = {
  size: 18,
};

IconHot = React.memo ? React.memo(IconHot) : IconHot;

export default IconHot;
