import { memo, SVGProps } from 'react';

const Vector7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 8L-6.11959e-07 -2.38419e-07' stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector7Icon);
export { Memo as Vector7Icon };
