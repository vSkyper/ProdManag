import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge3.module.css';
import { Button_ConfigurationFilledStat } from './Button_ConfigurationFilledStat/Button_ConfigurationFilledStat';
import { Collapse_light } from './Collapse_light/Collapse_light';
import { Filter } from './Filter/Filter';
import { SearchBar_StateEnabledShowAvat } from './SearchBar_StateEnabledShowAvat/SearchBar_StateEnabledShowAvat';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    leadingIcon?: boolean;
  };
}
/* @figmaId 3:544 */
export const AndroidLarge3: FC<Props> = memo(function AndroidLarge3(props = {}) {
  let navigate = useNavigate();

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`} style={{ "borderStyle": "solid", "margin": 10 }}>
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
      <Button_ConfigurationFilledStat
        className={classes.button}
        text={{
          labelText: <div className={classes.labelText}>Odbierz</div>,
        }}
      />
      <div className={classes.divider3}></div>
      <div className={classes._10200Pkt2}>-10% 200 pkt.</div>
      <Button_ConfigurationFilledStat
        className={classes.button2}
        text={{
          labelText: <div className={classes.labelText2}>Odbierz</div>,
        }}
      />
      <div className={classes.image3}></div>
      <div className={classes.rectangle2}></div>
      <div onClick={() => navigate("/2")}>
        <Button_ConfigurationFilledStat
          className={classes.button3}
          text={{
            labelText: <div className={classes.labelText3}>Anuluj</div>,
          }}
        />
      </div>
      <div onClick={() => navigate("/4")}>
        <Button_ConfigurationFilledStat
          className={classes.button4}
          text={{
            labelText: <div className={classes.labelText4}>Odbierz</div>,
          }}
        />
      </div>
      <div className={classes.regulamin}>Regulamin</div>
      <div className={classes.image4}></div>
      <div className={classes.biedronka2}>Biedronka</div>
      <div className={classes._10200Pkt3}>-10% 200 pkt.</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </div>
    </div>
  );
});
