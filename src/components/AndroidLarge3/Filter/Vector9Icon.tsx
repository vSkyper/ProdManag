import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 3L-9.17939e-07 0' stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
