import { memo, SVGProps } from 'react';

const Vector12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 9L-1.76244e-06 0' stroke='#222222' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector12Icon);
export { Memo as Vector12Icon };
