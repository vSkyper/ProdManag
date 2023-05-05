import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconButton_ConfigurationStanda } from '../IconButton_ConfigurationStanda/IconButton_ConfigurationStanda';
import { IconsMenu_24px } from '../IconsMenu_24px/IconsMenu_24px';
import { IconsSearch_24px } from '../IconsSearch_24px/IconsSearch_24px';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { IconsSearch_24pxIcon } from './IconsSearch_24pxIcon.js';
import classes from './SearchBar_StateEnabledShowAvat.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    leadingIcon?: boolean;
  };
  text?: {
    supportingText?: ReactNode;
  };
}
/* @figmaId 3:412 */
export const SearchBar_StateEnabledShowAvat: FC<Props> = memo(function SearchBar_StateEnabledShowAvat(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.stateLayer}>
        {!props.hide?.leadingIcon && (
          <IconButton_ConfigurationStanda
            swap={{
              iconsSettings_24px: (
                <IconsMenu_24px
                  swap={{
                    icon: <IconsMenu_24pxIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
          />
        )}
        <div className={classes.content}>
          {props.text?.supportingText != null ? (
            props.text?.supportingText
          ) : (
            <div className={classes.supportingText}>Hinted search text</div>
          )}
        </div>
        <div className={classes.trailingElements}>
          <IconButton_ConfigurationStanda
            swap={{
              iconsSettings_24px: (
                <IconsSearch_24px
                  swap={{
                    icon: <IconsSearch_24pxIcon className={classes.icon2} />,
                  }}
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
});
