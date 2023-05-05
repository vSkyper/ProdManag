import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge5.module.css';
import { Button_ConfigurationFilledStat } from './Button_ConfigurationFilledStat/Button_ConfigurationFilledStat';
import { Collapse_light } from './Collapse_light/Collapse_light';
import { Filter } from './Filter/Filter';
import { IconsMenu_24px } from './IconsMenu_24px/IconsMenu_24px';
import { IconsMenu_24pxIcon } from './IconsMenu_24pxIcon.js';
import { SearchBar_StateEnabledShowAvat } from './SearchBar_StateEnabledShowAvat/SearchBar_StateEnabledShowAvat';
import { StateLayerIcon } from './StateLayerIcon.js';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  hide?: {
    icon?: boolean;
    leadingIcon?: boolean;
  };
}
/* @figmaId 33:197 */
export const AndroidLarge5: FC<Props> = memo(function AndroidLarge5(props = {}) {
  let navigate = useNavigate();

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
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
              <div className={classes.icon2} onClick={() => navigate("/")}>
                <StateLayerIcon className={classes.icon3} />
              </div>
              <IconsMenu_24px
                hide={{
                  icon: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.dostepneNagrody}>Dostępne nagrody</div>
      <div className={classes.masz1337Punktow}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Masz </span>
          <span className={classes.label2}>1337</span>
          <span className={classes.label3}> punktów</span>
        </p>
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
      <Filter className={classes.filter} />
      <div className={classes.fi}>filtruj</div>
      <div className={classes.fi2}>sortuj</div>
      <Collapse_light className={classes.collapse_light} />
      <div className={classes.image5}></div>
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
      <div className={classes.image6}></div>
      <div className={classes.rectangle3}></div>
      <Button_ConfigurationFilledStat
        className={classes.button3}
        text={{
          labelText: <div className={classes.labelText3}>Kup Premium</div>,
        }}
      />
      <div className={classes.nieChceszReklam}>Nie chcesz reklam?</div>
      <div className={classes.jedyne20Dozywotnio}>Jedyne 20$ dożywotnio</div>
      <div className={classes.regulaminUsUgi}>Regulamin usługi</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Karol jest gupi. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </div>
    </div>
  );
});
