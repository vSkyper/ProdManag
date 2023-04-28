import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 4L-4.89568e-07 -1.19209e-07' stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };
