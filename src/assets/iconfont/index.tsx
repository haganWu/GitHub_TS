/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconWelcome from './IconWelcome';
import IconTendency from './IconTendency';
import IconHot from './IconHot';
import IconMine from './IconMine';
import IconCollectionActive from './IconCollectionActive';
import IconGithub from './IconGithub';

export type IconNames = 'icon-welcome' | 'icon-tendency' | 'icon-hot' | 'icon-mine' | 'icon-collectionActive' | 'icon-github';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-welcome':
      return <IconWelcome key="1" {...rest} />;
    case 'icon-tendency':
      return <IconTendency key="2" {...rest} />;
    case 'icon-hot':
      return <IconHot key="3" {...rest} />;
    case 'icon-mine':
      return <IconMine key="4" {...rest} />;
    case 'icon-collectionActive':
      return <IconCollectionActive key="5" {...rest} />;
    case 'icon-github':
      return <IconGithub key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
