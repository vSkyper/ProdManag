import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsMenu_24px.module.css';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 3:3 */
export const IconsMenu_24px: FC<Props> = memo(function IconsMenu_24px(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsMenu_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
