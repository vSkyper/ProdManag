import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5 9L4.64645 9.35355L5 9.70711L5.35355 9.35355L5 9ZM5.5 2.40413e-07C5.5 -0.276142 5.27614 -0.5 5 -0.5C4.72386 -0.5 4.5 -0.276142 4.5 1.96701e-07L5.5 2.40413e-07ZM-0.353553 4.35355L4.64645 9.35355L5.35355 8.64645L0.353554 3.64645L-0.353553 4.35355ZM5.35355 9.35355L10.3536 4.35355L9.64645 3.64645L4.64645 8.64645L5.35355 9.35355ZM5.5 9L5.5 2.40413e-07L4.5 1.96701e-07L4.5 9L5.5 9Z'
      fill='#222222'
    />
  </svg>
);
const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };
