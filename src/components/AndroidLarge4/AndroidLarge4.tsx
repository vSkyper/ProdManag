import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge4.module.css';
import { Frame1Icon2 } from './Frame1Icon2.js';
import { Frame1Icon } from './Frame1Icon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}
/* @figmaId 3:651 */
export const AndroidLarge4: FC<Props> = memo(function AndroidLarge4(props = {}) {
  let navigate = useNavigate();

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.aktywowanoNagrode}>Aktywowano nagrodę</div>
      <div className={classes.wykorzystajPrzed}>Wykorzystaj przed:</div>
      <div className={classes.frame1}>
        <div className={classes.rectangle1}></div>
        <div className={classes.beECO}>BeECO</div>
        <div className={classes.container}>
          <div className={classes.container2}></div>
        </div>
        <div className={classes.icon}>
          <Frame1Icon className={classes.icon2} />
        </div>
        <div className={classes.frame12}>
          <div className={classes.rectangle12}></div>
          <div className={classes.beECO2}>BeECO</div>
          <div className={classes.icon3} onClick={() => navigate("/3")}>
            <Frame1Icon2 className={classes.icon4} />
          </div>
        </div>
      </div>
      <div className={classes.image2}></div>
      <div className={classes.biedronka}>Biedronka</div>
      <div className={classes._10200Pkt}>-10% 200 pkt.</div>
      <div className={classes._2342023rGodz210}>23.04.2023r. godz. 21:00</div>
      <div className={classes.image5}></div>
    </div>
  );
});
