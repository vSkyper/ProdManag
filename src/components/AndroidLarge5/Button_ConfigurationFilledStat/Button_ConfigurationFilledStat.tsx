import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_ConfigurationFilledStat.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    labelText?: ReactNode;
  };
}
/* @figmaId 3:203 */
export const Button_ConfigurationFilledStat: FC<Props> = memo(function Button_ConfigurationFilledStat(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.stateLayer}>
        {props.text?.labelText != null ? props.text?.labelText : <div className={classes.labelText}>Hovered</div>}
      </div>
    </button>
  );
});
