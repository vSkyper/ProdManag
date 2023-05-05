import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 -2.18557e-07L4.64645 -0.353554L5 -0.707107L5.35355 -0.353554L5 -2.18557e-07ZM5.5 9C5.5 9.27614 5.27614 9.5 5 9.5C4.72386 9.5 4.5 9.27614 4.5 9L5.5 9ZM-0.353553 4.64645L4.64645 -0.353554L5.35355 0.353553L0.353554 5.35355L-0.353553 4.64645ZM5.35355 -0.353554L10.3536 4.64645L9.64645 5.35355L4.64645 0.353553L5.35355 -0.353554ZM5.5 -2.40413e-07L5.5 9L4.5 9L4.5 -1.96701e-07L5.5 -2.40413e-07Z'
      fill='#222222'
    />
  </svg>
);
const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
