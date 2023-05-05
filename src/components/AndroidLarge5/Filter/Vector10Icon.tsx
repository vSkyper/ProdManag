import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 9L-9.79135e-07 0' stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };
