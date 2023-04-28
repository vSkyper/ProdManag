import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge2.module.css';
import { Button_ConfigurationFilledStat } from './Button_ConfigurationFilledStat/Button_ConfigurationFilledStat';
import { Collapse_light } from './Collapse_light/Collapse_light';
import { Filter } from './Filter/Filter';
import { Frame1Icon } from './Frame1Icon.js';
import { SearchBar_StateEnabledShowAvat } from './SearchBar_StateEnabledShowAvat/SearchBar_StateEnabledShowAvat';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    leadingIcon?: boolean;
  };
}
/* @figmaId 3:244 */
export const AndroidLarge2: FC<Props> = memo(function AndroidLarge2(props = {}) {
  let navigate = useNavigate();

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.dostepneNagrody}>Dostępne nagrody</div>
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
        <div className={classes.icon} onClick={() => navigate("/")}>
          <Frame1Icon className={classes.icon2} />
        </div>
      </div>
      <SearchBar_StateEnabledShowAvat
        className={classes.searchBar}
        hide={{
          leadingIcon: true,
        }}
        text={{
          supportingText: <div className={classes.w}> Wyszukaj nagrodę</div>,
        }}
      />
      <Filter />
      <div className={classes.fi}>filtruj</div>
      <div className={classes.fi2}>sortuj</div>
      <Collapse_light />
      <div className={classes.image2}></div>
      <div className={classes.divider}></div>
      <div className={classes.divider2}></div>
      <div className={classes.biedronka}>Biedronka</div>
      <div className={classes.roweryMiejskie}>Rowery miejskie</div>
      <div className={classes._10200Pkt}>-10% 200 pkt.</div>
      <div onClick={() => navigate("/3")}>
        <Button_ConfigurationFilledStat
          className={classes.button}
          text={{
            labelText: <div className={classes.labelText}>Odbierz</div>,
          }}
        />
      </div>
      <div className={classes.divider3}></div>
      <div className={classes._1h300Pkt}>1h 300 pkt.</div>
      <div onClick={() => navigate("/3")}>
        <Button_ConfigurationFilledStat
          className={classes.button2}
          text={{
            labelText: <div className={classes.labelText2}>Odbierz</div>,
          }}
        />
      </div>
      <div className={classes.image3}></div>
    </div>
  );
});
