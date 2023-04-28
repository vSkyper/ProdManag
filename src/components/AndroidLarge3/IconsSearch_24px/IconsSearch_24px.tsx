import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsSearch_24px.module.css';
import { IconsSearch_24pxIcon } from './IconsSearch_24pxIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3:350 */
export const IconsSearch_24px: FC<Props> = memo(function IconsSearch_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsSearch_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
