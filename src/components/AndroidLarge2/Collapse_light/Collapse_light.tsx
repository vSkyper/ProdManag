import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Collapse_light.module.css';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:189 */
export const Collapse_light: FC<Props> = memo(function Collapse_light(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon2} />
      </div>
    </div>
  );
});
