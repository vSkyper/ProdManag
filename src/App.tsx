import { memo } from 'react';
import type { FC } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { AndroidLarge3 } from './components/AndroidLarge3/AndroidLarge3';
import { AndroidLarge1 } from './components/AndroidLarge1/AndroidLarge1';
import { AndroidLarge2 } from './components/AndroidLarge2/AndroidLarge2';
import { AndroidLarge4 } from './components/AndroidLarge4/AndroidLarge4';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Router>
        <Routes>
          <Route path="/" element={<AndroidLarge1 />} />
          <Route path="/2" element={<AndroidLarge2 />} />
          <Route path="/3" element={<AndroidLarge3 />} />
          <Route path="/4" element={<AndroidLarge4 />} />
        </Routes>
      </Router>
    </div>
  );
});
