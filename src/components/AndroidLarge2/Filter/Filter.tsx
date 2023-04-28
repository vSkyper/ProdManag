import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse36Icon } from './Ellipse36Icon.js';
import { Ellipse37Icon } from './Ellipse37Icon.js';
import { Ellipse38Icon } from './Ellipse38Icon.js';
import classes from './Filter.module.css';
import { Vector7Icon } from './Vector7Icon.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import { Vector11Icon } from './Vector11Icon.js';
import { Vector12Icon } from './Vector12Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:162 */
export const Filter: FC<Props> = memo(function Filter(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector7}>
        <Vector7Icon className={classes.icon} />
      </div>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon2} />
      </div>
      <div className={classes.vector8}>
        <Vector8Icon className={classes.icon3} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon4} />
      </div>
      <div className={classes.vector11}>
        <Vector11Icon className={classes.icon5} />
      </div>
      <div className={classes.vector12}>
        <Vector12Icon className={classes.icon6} />
      </div>
      <div className={classes.ellipse36}>
        <Ellipse36Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse37}>
        <Ellipse37Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse38}>
        <Ellipse38Icon className={classes.icon9} />
      </div>
    </div>
  );
});
