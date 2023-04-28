import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge1.module.css';
import { Button_ConfigurationFilledStat } from './Button_ConfigurationFilledStat/Button_ConfigurationFilledStat';
import { IconsMenu_24px } from './IconsMenu_24px/IconsMenu_24px';
import { IconsMenu_24pxIcon2 } from './IconsMenu_24pxIcon2.js';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const AndroidLarge1: FC<Props> = memo(function AndroidLarge1(props = {}) {
  let navigate = useNavigate();

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div onClick={() => navigate("/2")}>
        <Button_ConfigurationFilledStat
          className={classes.button}
          text={{
            labelText: <div className={classes.labelText}>Odbierz nagrodę!</div>,
          }}
        />
      </div>
      <div className={classes.hejJan}>Hej Jan!</div>
      <div className={classes.twojeZadania}>Twoje zadania:</div>
      <div className={classes.masz1337Punktow}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Masz </span>
          <span className={classes.label2}>1337</span>
          <span className={classes.label3}> punktów</span>
        </p>
      </div>
      <div className={classes.frame1}>
        <div className={classes.rectangle1}></div>
        <div className={classes.beECO}>BeECO</div>
        <div className={classes.container}>
          <div className={classes.stateLayer}>
            <IconsMenu_24px
              swap={{
                icon: <IconsMenu_24pxIcon className={classes.icon} />,
              }}
            />
          </div>
        </div>
        <div className={classes.frame12}>
          <div className={classes.rectangle12}></div>
          <div className={classes.beECO2}>BeECO</div>
          <div className={classes.container2}>
            <div className={classes.stateLayer2}>
              <IconsMenu_24px
                swap={{
                  icon: <IconsMenu_24pxIcon2 className={classes.icon2} />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.image1}></div>
      <div className={classes.posprzatajLas}>Posprzątaj las</div>
      <div className={classes.divider}></div>
      <div className={classes.divider2}></div>
    </div>
  );
});
