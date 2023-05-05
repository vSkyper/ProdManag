import { memo, SVGProps } from 'react';

const StateLayerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z' fill='#49454F' />
  </svg>
);
const Memo = memo(StateLayerIcon);
export { Memo as StateLayerIcon };
