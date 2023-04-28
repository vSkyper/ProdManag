import { memo, SVGProps } from 'react';

const Ellipse36Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2} cy={2} r={2} stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Ellipse36Icon);
export { Memo as Ellipse36Icon };
