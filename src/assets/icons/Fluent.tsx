export interface IFluentProps {
  size?: number;
  color?: IconColorScheme | string;
  color2?: IconColorScheme | string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export enum IconColorScheme {
  primaryText = "#334155",
  secondaryText = "#94a3b8",
  primary = "#5f5af7",
  secondary = "#deddf1",
  error = "#ff2c56",
  background = "#ffffff",
  divider = "#b5c2d1"
}

export function ArrowRightAltIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 96 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="m558.739 827.566-56.566-55.001 159.521-158.956H148.13v-79.218h513.564L501.173 373.87l56.566-54.436L812.87 574 558.739 827.566Z"
        fill={color}
      />
    </svg>
  );
}

export function PersonalitySearchIcon({
  size = 512,
  color = "black",
  color2 = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      x={0}
      y={0}
      viewBox="0 0 496 496"
      xmlSpace="preserve"
      className={className}
      onClick={onClick}
    >
      <g transform="matrix(1,0,0,1,0,35)">
        <path
          d="M456 72H320v16h-34.656C274.32 37.742 229.512 0 176 0 114.238 0 64 50.238 64 112c0 44.566 26.223 83.016 64 101.04v12.714l-97.695 24.422A39.953 39.953 0 0 0 0 288.984V416h352V288.984a39.953 39.953 0 0 0-30.305-38.808L224 225.754v-12.715c30.785-14.687 53.863-42.926 61.344-77.039H320v16h136c22.055 0 40-17.945 40-40s-17.945-40-40-40zM133.55 240.863l29.9 29.899-32.352 21.566-8.84-48.64zm57.321 50.664L185.754 312h-19.508l-5.125-20.473 14.879-9.91zm-43.879 9.426 4.832 19.328L144 363.305l-9.785-53.832zM166.672 328h18.656l13.086 72h-44.84zm33.504-7.719 4.832-19.328 12.785 8.52L208 363.305zM16 288.984c0-11.03 7.48-20.609 18.176-23.289l72.527-18.129L134.414 400H64v-96H48v96H16zm320 0V400h-32v-96h-16v96h-70.414l27.71-152.434 72.528 18.13A23.983 23.983 0 0 1 336 288.983zm-106.246-45.296-8.844 48.64-32.351-21.566 29.898-29.899zm-21.754-15-32 32-32-32v-9.407c10.152 3.04 20.879 4.719 32 4.719s21.848-1.68 32-4.719zM176 208c-52.938 0-96-43.063-96-96s43.063-96 96-96 96 43.063 96 96-43.063 96-96 96zm111.594-88c.191-2.656.406-5.297.406-8s-.215-5.344-.406-8H320v16zM336 88h16v48h-16zm120 48h-88V88h88c13.23 0 24 10.77 24 24s-10.77 24-24 24zm0 0"
          fill={color}
          data-original="#000000"
          className=""
        />
        <path
          d="M176 176c-35.29 0-64-28.71-64-64 0-16.246 6.168-31.777 17.344-43.71l-11.672-10.938C103.695 72.266 96 91.672 96 112c0 44.113 35.887 80 80 80 20.32 0 39.727-7.695 54.648-21.672l-10.937-11.672C207.77 169.832 192.238 176 176 176zM176 32c-16.07 0-31.566 4.754-44.824 13.727l8.969 13.25C150.754 51.8 163.145 48 176 48c35.29 0 64 28.71 64 64 0 12.855-3.8 25.246-10.977 35.848l13.25 8.968C251.246 143.566 256 128.07 256 112c0-44.113-35.887-80-80-80zM448 104h16v16h-16zm0 0"
          fill={color2}
          data-original="#000000"
          className=""
        />
      </g>
    </svg>
  );
}

export function QuotesIconOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M29 23h8v-8h-8Zm-18 0h8v-8h-8Zm20.3 11 4-8H26V12h14v14.4L36.2 34Zm-18 0 4-8H8V12h14v14.4L18.2 34ZM15 19Zm18 0Z"
        fill={color}
      />
    </svg>
  );
}

export function InstagramIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"
        fill={color}
      />
    </svg>
  );
}

export function FacebookIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
        fill={color}
      />
    </svg>
  );
}

export function LocationIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5Zm0 16.55q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Zm0-23.6Z"
        fill={color}
      />
    </svg>
  );
}

export function SearchIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 96 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M795.435 950.827 529.043 685.001q-29.434 24.26-69.111 37.934-39.676 13.674-85.323 13.674-112.119 0-189.864-77.826Q106.999 580.957 106.999 471t77.827-187.783q77.826-77.826 188.283-77.826 110.456 0 187.782 77.826 77.327 77.826 77.327 187.933 0 43.98-13.152 83.133-13.153 39.152-39.457 73.587l267.392 265.391-57.566 57.566ZM373.808 657.391q77.659 0 131.425-54.533Q558.999 548.326 558.999 471q0-77.326-53.849-131.858-53.849-54.533-131.342-54.533-78.326 0-132.958 54.533Q186.218 393.674 186.218 471q0 77.326 54.549 131.858 54.549 54.533 133.041 54.533Z"
        fill={color}
      />
    </svg>
  );
}

export function QuizIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 96 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M795.435 950.827 529.043 685.001q-29.434 24.26-69.111 37.934-39.676 13.674-85.323 13.674-112.119 0-189.864-77.826Q106.999 580.957 106.999 471t77.827-187.783q77.826-77.826 188.283-77.826 110.456 0 187.782 77.826 77.327 77.826 77.327 187.933 0 43.98-13.152 83.133-13.153 39.152-39.457 73.587l267.392 265.391-57.566 57.566ZM373.808 657.391q77.659 0 131.425-54.533Q558.999 548.326 558.999 471q0-77.326-53.849-131.858-53.849-54.533-131.342-54.533-78.326 0-132.958 54.533Q186.218 393.674 186.218 471q0 77.326 54.549 131.858 54.549 54.533 133.041 54.533Z"
        fill={color}
      />
    </svg>
  );
}

export function InsightIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 96 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M112.506 908.63q-31.028 0-53.082-22.142-22.054-22.143-22.054-53.291 0-31.147 22.107-53.357 22.106-22.21 52.865-22.21 5.767 0 11.125.739 5.359.74 14.316 2.74l189.956-190.106q-2-8.807-2.62-14.166-.619-5.359-.619-11.031 0-31.201 22.298-53.253 22.299-22.053 53.445-22.053t53.202 22.25Q475.5 515 475.5 546.244q0 3.191-3.239 24.191l103.204 103.304q8.578-2 13.937-2.62 5.359-.619 10.598-.619 5.239 0 10.717.619 5.479.62 14.064 2.62l150.328-150.088q-2-8.586-2.62-14.064-.62-5.478-.62-11.134 0-31.109 22.23-53.096 22.23-21.987 53.446-21.987 31.216 0 53.151 22.074 21.934 22.074 21.934 53.29 0 31.216-22.023 53.306-22.023 22.091-52.949 22.091-5.767 0-11.245-.62-5.478-.62-14.064-2.62L672.261 721.219q2 8.585 2.62 14.064.619 5.478.619 11.077 0 30.796-22.18 52.968-22.18 22.172-53.326 22.172t-53.32-22.172Q524.5 777.156 524.5 746.305q0-5.783.619-11.142.62-5.359 2.62-14.19L425.027 618.261q-8.831 2-14.19 2.62-5.359.619-11.087.619-3.185 0-24.185-3.239L184.891 808.852q2 8.561 2.74 13.8.739 5.239.739 11.006 0 30.759-22.285 52.866-22.285 22.106-53.579 22.106ZM160 468.304l-21.712-46.592L91.696 400l46.592-21.712L160 331.696l21.712 46.592L228.304 400l-46.592 21.712L160 468.304Zm440-48.847-32.666-70.791L496.543 316l70.791-32.905L600 212.543l32.905 70.552L703.457 316l-70.552 32.666L600 419.457Z"
        fill={color}
      />
    </svg>
  );
}

export function DescriptionIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 96 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M319 806.478h322v-62.63H319v62.63Zm0-170h322v-62.63H319v62.63Zm-96.848 345.5q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865V238.152q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337H583.63L806.218 392.37v521.478q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265H222.152Zm326.696-557.826v-186H222.152v675.696h515.696V424.152h-189Zm-326.696-186v186-186 675.696-675.696Z"
        fill={color}
      />
    </svg>
  );
}

export function PersonalitySearchGradientIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 496 496`}
      fill="none"
      onClick={onClick}
      className={className}
    >
      <linearGradient
        id="a"
        x1={248}
        x2={248}
        y1={416}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9f2fff" />
        <stop offset={1} stopColor="#0bb1d3" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M456 72H320v16h-34.656C274.32 37.742 229.512 0 176 0 114.238 0 64 50.238 64 112c0 44.566 26.223 83.016 64 101.04v12.714l-97.695 24.422A39.953 39.953 0 0 0 0 288.984V416h352V288.984a39.953 39.953 0 0 0-30.305-38.808L224 225.754v-12.715c30.785-14.687 53.863-42.926 61.344-77.039H320v16h136c22.055 0 40-17.945 40-40s-17.945-40-40-40zM133.55 240.863l29.9 29.899-32.352 21.566-8.84-48.64zm57.321 50.664L185.754 312h-19.508l-5.125-20.473 14.879-9.91zm-43.879 9.426 4.832 19.328L144 363.305l-9.785-53.832zM166.672 328h18.656l13.086 72h-44.84zm33.504-7.719 4.832-19.328 12.785 8.52L208 363.305zM16 288.984c0-11.03 7.48-20.609 18.176-23.289l72.527-18.129L134.414 400H64v-96H48v96H16zm320 0V400h-32v-96h-16v96h-70.414l27.71-152.434 72.528 18.13A23.983 23.983 0 0 1 336 288.983zm-106.246-45.296-8.844 48.64-32.351-21.566 29.898-29.899zm-21.754-15-32 32-32-32v-9.407c10.152 3.04 20.879 4.719 32 4.719s21.848-1.68 32-4.719zM176 208c-52.938 0-96-43.063-96-96s43.063-96 96-96 96 43.063 96 96-43.063 96-96 96zm111.594-88c.191-2.656.406-5.297.406-8s-.215-5.344-.406-8H320v16zM336 88h16v48h-16zm120 48h-88V88h88c13.23 0 24 10.77 24 24s-10.77 24-24 24zm-236.29 22.656 10.938 11.672C215.727 184.305 196.32 192 176 192c-44.113 0-80-35.887-80-80 0-20.328 7.695-39.734 21.672-54.648l11.672 10.937C118.168 80.223 112 95.754 112 112c0 35.29 28.71 64 64 64 16.238 0 31.77-6.168 43.71-17.344zM256 112c0 16.07-4.754 31.566-13.727 44.824l-13.25-8.969C236.2 137.246 240 124.855 240 112c0-35.29-28.71-64-64-64-12.855 0-25.246 3.8-35.848 10.977l-8.968-13.25C144.434 36.754 159.93 32 176 32c44.113 0 80 35.887 80 80zm192-8h16v16h-16zm0 0"
        data-original="url(#a)"
      />
    </svg>
  );
}

export function AnxietyPersonIcon({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={size + `px`}
      height={size + `px`}
      viewBox="0 0 682.667 682.667"
    >
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M0 512h512V0H0Z" data-original="#000000" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
        <path
          fill="#b3e59f"
          d="M0 0c0 17.651-2.383 35.085-12.867 47.658-13.299 15.948-33.319 26.097-55.707 26.097-40.041 0-72.5-32.459-72.5-72.5 0-10.6 2.274-20.668 6.362-29.743 3.646-8.095 10.808-14.985 17.01-21.172 13.115-13.082 30.438-18.383 50.426-18.383C-27.235-68.043 0-40.041 0 0"
          data-original="#b3e59f"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(273.574 404.745)"
        />
        <path
          fill="#03c988"
          d="M0 0c3.8-8.8 5.91-18.5 5.91-28.7 0-6.15-.772-12.117-2.216-17.819a4.971 4.971 0 0 0-4.112-3.694c-19.106-2.73-36.3-10.064-50.531-21.676-1.173-.957-2.7-1.372-4.182-1.064A54.908 54.908 0 0 1-65.93-71.82l-.52.009c-14.571 0-28.316-4.59-39.794-13.116l-.091-.025c-3.966-1.141-7.021 3.475-4.386 6.65C-97.845-62.794-90.09-42.884-90.09-21.2c0 11.38-2.13 22.46-6.21 32.79-18.63-13.111-30.79-34.78-30.79-59.29a72.152 72.152 0 0 1 5.935-28.727l-.025.027c.223-.449.178-.498.753-1.663 11.642-25.222 37.347-42.616 67.057-42.127 38.414.631 69.999 31.687 71.241 70.086C18.492-30.896 11.638-13.308 0 0"
          data-original="#95d6a4"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(259.59 453.7)"
        />
        <path
          fill="#1c82ad"
          d="M0 0c0 20.103-5.192 37.793-18.406 50.926C-31.514 63.951-49.572 72-69.511 72c-40.041 0-72.5-32.459-72.5-72.5 0-13.764 3.836-26.632 10.496-37.594 12.716-20.927 37.324-31.469 63.6-31.469C-27.874-69.563 0-40.041 0 0"
          data-original="#df646e"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(149.51 433)"
        />
        <path
          fill="#00337c"
          d="M0 0c0-40.04-32.46-72.5-72.5-72.5-26.51 0-49.7 14.23-62.34 35.48 12.82-11.49 29.76-18.48 48.34-18.48C-46.46-55.5-14-23.04-14 17c0 13.53-3.71 26.189-10.16 37.02C-9.33 40.75 0 21.46 0 0"
          data-original="#dc4955"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(152.5 432.5)"
        />
        <path
          fill="#1c82ad"
          d="M0 0c0 22.694-7.268 42.952-23.592 56.246C-36.07 66.408-51.994 72.5-69.341 72.5c-40.041 0-72.5-32.459-72.5-72.5 0-15.602 4.929-30.053 13.314-41.881 13.133-18.527 38.748-24.438 63.186-24.438C-25.3-66.319 0-40.041 0 0"
          data-original="#df646e"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(489.34 244)"
        />
        <path
          fill="#00337c"
          d="M0 0c.556.795.706.294 5.867 7.275 8.358 11.817 13.284 26.231 13.284 41.804 0 25.13-12.79 47.28-32.219 60.28 7.719-11.52 12.219-25.37 12.219-40.28 0-16.57-5.567-31.835-14.923-44.044a4.974 4.974 0 0 0-5.078-1.811 90.101 90.101 0 0 1-20.499 2.355c-22.029 0-42.215-8.003-57.822-21.248a4.997 4.997 0 0 0-5.383-.697 71.901 71.901 0 0 0-9.075 5.165C-89.713-27.076-35.479-37.27 0 0"
          data-original="#dc4955"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(473.349 194.92)"
        />
        <path
          fill="#faf8f8"
          d="M0 0c0 20.103-5.192 37.793-18.406 50.926C-31.514 63.951-49.572 72-69.511 72c-40.041 0-72.5-32.459-72.5-72.5 0-13.764 3.836-26.632 10.496-37.594 12.716-20.927 37.324-31.469 63.6-31.469C-27.874-69.563 0-40.041 0 0"
          data-original="#faf8f8"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(501.51 131.5)"
        />
        <path
          fill="#f0e9e6"
          d="M0 0c0-40.04-32.46-72.5-72.5-72.5-26.51 0-49.7 14.23-62.34 35.48 12.82-11.49 29.76-18.48 48.34-18.48C-46.46-55.5-14-23.04-14 17c0 13.53-3.71 26.189-10.16 37.02C-9.33 40.75 0 21.46 0 0"
          data-original="#f0e9e6"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(504.5 131)"
        />
        <path
          fill="#faf8f8"
          d="M0 0c0 20.103-5.192 37.793-18.406 50.926C-31.514 63.951-49.572 72-69.511 72c-40.041 0-72.5-32.459-72.5-72.5 0-13.764 3.836-26.632 10.496-37.594 12.716-20.927 37.324-31.469 63.6-31.469C-27.874-69.563 0-40.041 0 0"
          data-original="#faf8f8"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(501.51 433)"
        />
        <path
          fill="#f0e9e6"
          d="M0 0c0-40.04-32.46-72.5-72.5-72.5-26.51 0-49.7 14.23-62.34 35.48 12.82-11.49 29.76-18.48 48.34-18.48C-46.46-55.5-14-23.04-14 17c0 13.53-3.71 26.189-10.16 37.02C-9.33 40.75 0 21.46 0 0"
          data-original="#f0e9e6"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(504.5 432.5)"
        />
        <path
          fill="#faf8f8"
          d="m0 0-41.707 24.71-91.628.219-15.884-4.811-13.138-53.039 35.986-41.667h77.672z"
          data-original="#faf8f8"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(343.935 82.088)"
        />
        <path
          fill="#f2d1a5"
          d="m0 0-12.754-23.118-2.456-21.225c-.939-8.061 1.262-16.232 6.354-22.553 6.46-8.018 18.308-16.414 39.6-16.414 21.291 0 33.139 8.394 39.6 16.413a29.554 29.554 0 0 1 5.55 11.033c.98 3.721-3.936 8.966-4.391 12.856l.099 44.578Z"
          data-original="#f2d1a5"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(225.656 150.024)"
        />
        <path
          fill="#f2bb88"
          d="m0 0 2.677 23.117 81.686 1.569 4.968-44.796 3.573-7.235-4.258-5.4-7.236 2.175c-4.415.977-3.965 7.1-4.461 10.491l-.803 7.241c-.337 3.049-3.494 4.899-6.339 3.755-8.844-3.555-17.64-5.352-26.303-5.352C29.238-14.435 14.611-9.582 0 0"
          data-original="#f2bb88"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(212.897 126.907)"
        />
        <path
          fill="#f0e9e6"
          d="M0 0c11.764 22.433 17.163 51.146 19.615 70.898a6.912 6.912 0 0 1-4.877 7.468l-9.755 2.936a31.043 31.043 0 0 1 .808 11.527l-.123 1.108 15.826-4.76 47.249-14.212C88.254 69.097 79.499 9.931 79.499 9.931L10.213-5.36h-13.02z"
          data-original="#f0e9e6"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(296.56 12.86)"
        />
        <path
          fill="#f0e9e6"
          d="m0 0 8.727-29.86 87.317-8.222h13.019l-2.806 5.36C90.622-2.906 86.224 38.021 85.055 54.232a19.001 19.001 0 0 1-.324 2.392L37.413 42.289A53.823 53.823 0 0 1 0 0"
          data-original="#f0e9e6"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(109.985 45.582)"
        />
        <path
          fill="#03c988"
          d="M0 0c-4.787 0-8.41 4.326-7.571 9.039l5.511 30.936c4.261 24.531 21.725 44.226 45.565 51.401l27.501 8.269c5.654 1.7 11.436-2.269 11.86-8.159C84.279 71.835 89.096 31.012 105.358 0Z"
          data-original="#f5de46"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(100.67 7.5)"
        />
        <path
          fill="#f2bb88"
          d="M0 0h5.149c12.317 0 22.302-10.02 22.302-22.379 0-17.048-13.772-30.867-30.762-30.867h-177.645c-16.989 0-30.762 13.819-30.762 30.867C-211.718-10.02-201.732 0-189.416 0h5.149z"
          data-original="#f2bb88"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(348.846 250.58)"
        />
        <path
          fill="#f2d1a5"
          d="M0 0c0-39.152-.756-52.012-16.683-74.143-21.967-30.524-49.333-51.255-75.451-51.255-26.117 0-53.482 20.731-75.45 51.255-13.304 18.487-16.022 30.504-16.557 56.781-.105 5.18 3.522 13.179 3.522 19.627l-12.951 87.571L8.685 62.74Z"
          data-original="#f2d1a5"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(348.846 250.58)"
        />
        <path
          fill="#f2bb88"
          d="m0 0-8.605-62.191c-3.714 9.466-10.651 18.302-19.449 24.054-28.984 18.942-59.469-6.813-106.141 34.646-.008 0-.016.008-.016.014-.685.609-1.369 1.231-2.06 1.862-2.039 1.877-5.323 1.069-6.246-1.546a125.971 125.971 0 0 0-2.606-6.821c-4.807-11.474-11.182-20.979-21.779-27.232-12.712-7.506-23.44-35.905-25.924-42.889-.1 5.184-.123 10.921-.123 17.366l-8.713 84.085 4.744 5.03z"
          data-original="#f2bb88"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(357.53 313.32)"
        />
        <path
          fill="#7a6d79"
          d="M0 0c-1.389-4.371-1.616-14.288-3.272-18.245-4.802-11.472-11.184-20.982-21.778-27.233-14.53-8.573-22.972-38.599-22.972-38.599-18.992 0-27.452 28.373-27.452 47.844 0 45.41 27.686 68.679 56.418 68.461 3.511-.028 7.115-.477 10.773-1.557 1.998-.59 4.344-3.099 6.368-4.099 1.692 1.793 3.119 5.226 4.938 6.835 16.609 14.696 38.322 21.769 61.381 21.642 9.538-.053 17.753-2.821 27.487-5.308 69.941-17.87 82.45-116.338 43.999-130.204 0 0-.72 4.338-1.658 7.25-3.375 10.491-10.782 20.503-20.436 26.814-28.984 18.944-59.465-6.816-106.14 34.643C5.551-9.886 2.172-2.154 0 0"
          data-original="#7a6d79"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(212.602 334.657)"
        />
        <path
          fill="#685e68"
          d="M0 0s-.062.915-.177 2.084a41.018 41.018 0 0 1-1.845 8.774c20.686 30.739 3.829 109.118-56.164 124.445-7.305 1.869-14.633 3.052-21.871 3.552 12.098.862 24.702-.345 37.252-3.552C27.139 117.431 38.451 13.865 0 0"
          data-original="#685e68"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(348.849 250.583)"
        />
        <path
          fill="#b3e59f"
          d="M0 0c0 17.651-2.383 35.085-12.867 47.658-13.299 15.948-33.319 26.097-55.707 26.097-40.041 0-72.5-32.459-72.5-72.5 0-10.6 2.274-20.668 6.362-29.743 3.646-8.095 10.808-14.985 17.01-21.172 13.115-13.082 30.438-18.383 50.426-18.383C-27.235-68.043 0-40.041 0 0"
          data-original="#b3e59f"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(152.574 180.745)"
        />
        <path
          fill="#03c988"
          d="M0 0c0-40.04-32.46-72.5-72.5-72.5-29.84 0-55.48 18.03-66.59 43.8 13.29-15.2 32.82-24.8 54.59-24.8C-44.46-53.5-12-21.04-12 19c0 10.2-2.11 19.9-5.91 28.7C-6.76 34.95 0 18.27 0 0"
          data-original="#95d6a4"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(156.5 182)"
        />
        <path
          fill="#faf8f8"
          d="M0 0v.504"
          data-original="#faf8f8"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(84.504 139.708)"
        />
        <path
          fill="#03c988"
          d="M0 0c4.783.012 8.395 4.343 7.544 9.051l-8.893 27.841c-4.314 24.504-18.453 39.581-42.292 46.696l-23.166 5.932c-5.654 1.685-7.043 4.298-7.452-1.587-.104-1.499-5.786-2.729-5.933-4.46-1.779-20.96-6.946-57.96-21.89-86.619l97.665.225z"
          data-original="#f5de46"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(408.904 10.646)"
        />
        <path
          fill="#03c988"
          d="m0 0 25.139-7.496c23.84-7.115 41.337-26.755 45.65-51.26l4.99-27.638 7.616.018c4.787.011 8.397 4.346 7.548 9.047l-5.581 30.902c-4.314 24.505-21.811 44.145-45.65 51.26l-27.5 8.197C6.56 14.716.79 10.737.381 4.85A282.954 282.954 0 0 0 0 0"
          data-original="#f3d332"
          style={{
            fillOpacity: 1,
            fillRule: "nonzero",
            stroke: "none"
          }}
          transform="translate(328.708 94.12)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c13.245 13.137 21.448 31.349 21.448 51.478 0 40.041-32.459 72.5-72.5 72.5-19.15 0-36.566-7.425-49.526-19.553"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(471.052 192.523)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0a72.869 72.869 0 0 1 19.928-18.86"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(361.103 201.714)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c0 .834.058 1.654.17 2.457 1.212 8.686 8.755 15.343 17.814 15.16 9.166-.184 16.759-7.525 17.235-16.68.526-10.145-7.555-18.559-17.598-18.559v-18.427"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(402.668 268.78)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c3.813-12.714 11.021-23.96 20.571-32.685"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(135.545 385.143)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0a72.793 72.793 0 0 1 1.7 15.682c0 40.041-32.459 72.5-72.5 72.5-22.181 0-42.037-9.962-55.336-25.657"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(275.8 390.318)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v54"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(205.5 394.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c0 40.041-32.459 72.5-72.5 72.5S-145 40.041-145 0s32.459-72.5 72.5-72.5S0-40.041 0 0Z"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(504.5 432)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(432.5 432.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(462.5 432.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(402.5 432.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c8.106-3.134 16.918-4.852 26.13-4.852 40.041 0 72.5 32.459 72.5 72.5s-32.459 72.5-72.5 72.5-72.5-32.459-72.5-72.5c0-18.132 6.656-34.71 17.659-47.422"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(53.87 364.352)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c0 .834.058 1.654.17 2.457 1.212 8.686 8.755 15.343 17.814 15.16 9.166-.184 16.759-7.525 17.235-16.68.526-10.145-7.555-18.559-17.598-18.559v-18.427"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(62.668 456.78)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v.504"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(80.504 389.708)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c-13.219 14.001-31.952 22.738-52.727 22.738-40.041 0-72.5-32.459-72.5-72.5s32.459-72.5 72.5-72.5 72.5 32.459 72.5 72.5a72.59 72.59 0 0 1-2.325 18.283"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(136.727 231.762)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v.504"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(84.504 139.708)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v54"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(84.5 170.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c-12.6 21.417-35.888 35.791-62.533 35.791-40.041 0-72.5-32.459-72.5-72.5 0-11.033 2.465-21.491 6.874-30.854"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(494.533 167.709)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0a72.492 72.492 0 0 1 21.56-3.26c40.041 0 72.5 32.459 72.5 72.5a74.09 74.09 0 0 1-.073 3.274"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(410.44 61.76)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(431.5 131.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(461.5 131.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(401.5 131.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c-17.002 0-30.784 13.83-30.784 30.891v.001c0 12.368 9.992 22.395 22.318 22.395h4.154"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(167.51 197.478)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0h4.153c12.326 0 22.319-10.027 22.319-22.396v0c0-17.061-13.783-30.891-30.784-30.891"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(349.606 250.766)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0-26.653-8.046"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(210.225 107.123)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0 25.931-7.892"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(303.349 107.123)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0 3.9-33.572c.941-8.096-1.262-16.301-6.358-22.648-6.465-8.052-18.322-16.483-39.631-16.483-21.307 0-33.164 8.429-39.63 16.48-5.098 6.349-7.3 14.558-6.356 22.657L-84.104.526"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(298.491 139.668)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c0-39.182-.756-52.052-16.695-74.199-21.985-30.547-49.371-51.295-75.508-51.295-26.138 0-53.525 20.747-75.509 51.295C-183.65-52.052-184.407-39.182-184.407 0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(348.606 250.766)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c37.949-36.016 38.215-104.917 8.261-116.224 0 19.078-10.122 29.639-22.465 37.706-30.316 19.815-62.265-9.236-112.642 40.705-5.418-17.056-12.051-31.368-26.31-39.782-14.541-8.579-22.99-19.716-22.99-38.629-18.368 0-27.472 28.395-27.472 47.881 0 45.445 27.706 68.732 56.46 68.513 5.433-.041 11.087-1.094 16.823-3.927 23.545 24.953 59.894 32.104 95.764 22.939a79.64 79.64 0 0 0 4.656-1.342"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(340.345 366.99)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0c5.079-16.864 9.681-28.5 9.681-28.5"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(196.311 36)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0 7.127 40.143c2.13 12.306 7.557 23.4 15.43 32.321a70.912 70.912 0 0 0 10.49 9.396A70.65 70.65 0 0 0 44.5 88.672a66.804 66.804 0 0 0 8.227 3.09l27.521 8.302c5.659 1.708 11.445-2.278 11.869-8.192.698-9.746 2.251-19.831 4.232-29.591"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(91.365 7.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0-7.127 40.143c-4.264 24.635-21.742 44.413-45.601 51.619l-27.521 8.302c-5.658 1.708-11.445-2.278-11.869-8.192-.751-10.474-2.46-26.934-6.332-44.732l-7.24-26.145C-108.199 13.75-111.152 6.65-114.628 0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(421.44 7.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0 3.489-34.056"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(210.01 363.232)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0-19.918-11.5L0-23"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(300.459 234.75)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="m0 0 19.918-11.5L0-23"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(211.541 234.75)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0h16"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(248 164.5)"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={15}
          d="M0 0v0c4.422-2.947 10.578-2.947 15 0"
          data-original="#000000"
          style={{
            strokeWidth: 15,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "none",
            strokeOpacity: 1
          }}
          transform="translate(248.5 197.467)"
        />
      </g>
    </svg>
  );
}

export function ScaredPersonIcon({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={size + `px`}
    height={size + `px`}
    viewBox="0 0 682.667 682.667"
  >
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M0 512h512V0H0Z" data-original="#000000" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
      <path
        fill="#03c988"
        d="M0 0v45.63c0 36.783-25.034 68.846-60.72 77.767l-59.522 14.881h-80.161l-59.523-14.881c-35.685-8.921-60.72-40.984-60.72-77.767V0z"
        data-original="#ad7fdd"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(416.323 7.5)"
      />
      <path
        fill="#03c988"
        d="M0 0c-10.565-37.273-32.715-75.343-65.43-108.059-4.2-4.2-8.493-8.215-12.857-12.065H50.566v45.63C50.566-41.31 30.188-11.975 0 0"
        data-original="#9d66d6"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(365.756 127.624)"
      />
      <path
        fill="#fed2a4"
        d="M0 0v-98.197c0-55.34 44.862-100.202 100.202-100.202 55.34 0 100.201 44.862 100.201 100.202V0Z"
        data-original="#fed2a4"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(155.798 351.191)"
      />
      <path
        fill="#ffbd86"
        d="M0 0v-98.197c0-48.477-34.425-88.911-80.162-98.196a100.705 100.705 0 0 1 20.041-2.006c55.34 0 100.202 44.862 100.202 100.202V0z"
        data-original="#ffbd86"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(316.121 351.191)"
      />
      <path
        fill="#b36d3c"
        d="M0 0v-47.095h20.04v-50.101l11.801 22.575a40.079 40.079 0 0 0 35.52 21.514h18.812c61.338 0 84.169 46.092 84.169 46.092h4.437a18.036 18.036 0 0 0 16.934-11.827l28.73-78.354v50.101h20.04V0c0 66.407-53.834 120.241-120.241 120.242C53.834 120.242 0 66.408 0 0"
        data-original="#b36d3c"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(135.758 350.19)"
      />
      <path
        fill="#995e34"
        d="M0 0v47.095c0 45.064-24.794 84.33-61.481 104.921 1.202-36.257-8.558-99.181-75.994-156.797 48.728 7.315 67.334 44.862 67.334 44.862h4.437A18.036 18.036 0 0 0-48.77 28.253l28.73-78.354V0Z"
        data-original="#995e34"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(376.242 303.095)"
      />
      <path
        fill="#ea9b58"
        d="M0 0h-10.02v60.121H0c16.602 0 30.061-13.459 30.061-30.06v-.001C30.061 13.458 16.602 0 0 0"
        data-original="#ea9b58"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(366.222 252.994)"
      />
      <path
        fill="#ea9b58"
        d="M0 0h10.02v60.121H0c-16.602 0-30.061-13.459-30.061-30.06v-.001C-30.061 13.458-16.602 0 0 0"
        data-original="#ea9b58"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(145.778 252.994)"
      />
      <path
        fill="#fed2a4"
        d="M0 0v12.024c0 8.854 7.178 16.033 16.033 16.033h42.084c8.855 0 16.032-7.179 16.032-16.033v-159.32H0v83.167l-10.714 11.611a20.04 20.04 0 0 0-5.312 13.591v22.9C-16.026-7.175-8.851 0 0 0"
        data-original="#fed2a4"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(181.85 154.796)"
      />
      <path
        fill="#ffbd86"
        d="M0 0h-20.041c8.855 0 16.033-7.178 16.033-16.032v-159.321h20.04v159.321C16.032-7.178 8.854 0 0 0"
        data-original="#ffbd86"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(239.968 182.853)"
      />
      <path
        fill="#fed2a4"
        d="M0 0v12.024c0 8.854-7.178 16.033-16.033 16.033h-42.084c-8.855 0-16.032-7.179-16.032-16.033v-159.32H0v83.167l10.714 11.611a20.04 20.04 0 0 1 5.312 13.591v22.9C16.026-7.175 8.851 0 0 0"
        data-original="#fed2a4"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(330.15 154.796)"
      />
      <path
        fill="#ffbd86"
        d="M0 0v12.024c0 8.854-7.178 16.033-16.033 16.033h-20.04c8.855 0 16.032-7.179 16.032-16.033V-1.305c0-4.324 2.484-8.322 6.442-10.063 5.644-2.48 9.585-8.119 9.585-14.679v-4.864c0-5.037-1.897-9.889-5.312-13.591l-7.414-8.034a12.454 12.454 0 0 1-3.301-8.444v-86.316H0v83.167l10.714 11.611a20.04 20.04 0 0 1 5.312 13.591v22.9C16.026-7.175 8.851 0 0 0"
        data-original="#ffbd86"
        style={{
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="translate(330.15 154.796)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0 5.703 6.012 5.703 6.012 11.406C6.012 17.107 0 17.107 0 22.809c0 5.705 6.012 5.705 6.012 11.41C6.012 39.925 0 39.925 0 45.63"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(445.38 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-2.476 4.489-.212 12.046-3.269 16.144-3.059 4.1-10.948 4.083-14.543 7.733-3.583 3.637-3.444 11.527-7.513 14.659-4.036 3.106-11.624.956-16.094 3.507"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(431.826 105.916)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0 5.703-6.012 5.703-6.012 11.406C-6.012 17.107 0 17.107 0 22.809c0 5.705-6.012 5.705-6.012 11.41C-6.012 39.925 0 39.925 0 45.63"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(66.62 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c2.476 4.489.212 12.046 3.269 16.144 3.059 4.1 10.948 4.083 14.543 7.733 3.583 3.637 3.444 11.527 7.513 14.659 4.036 3.106 11.624.956 16.094 3.507"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(80.174 105.916)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 9.429-2.354c35.692-8.918 60.722-40.983 60.722-77.767v-45.632"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(346.171 133.253)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v45.632c0 36.784 25.031 68.848 60.722 77.766l9.429 2.355"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(95.677 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c19.79 18.3 32.18 44.49 32.18 73.57"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(324.02 179.42)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-29.08 12.39-55.27 32.18-73.57"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(155.8 252.99)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c1.867 5.573 9.62 8.771 12.094 14.038 2.494 5.31.01 13.315 3.079 18.27 3.084 4.981 11.361 6.325 14.981 10.903 3.629 4.59 3.028 12.952 7.152 17.093"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(108.682 399.416)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-1.867 5.574 1.522 13.237-.952 18.504-2.494 5.31-10.563 7.594-13.632 12.549-3.084 4.981-1.534 13.219-5.154 17.797-3.629 4.59-12.004 4.981-16.127 9.122"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(397.618 397.506)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v31.828"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(103.693 326.643)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v31.828"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(408.307 326.643)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-6.904 3.416-12.609 10.031-20.053 12.382-7.318 2.311-15.78.191-23.526 1.378-7.553 1.157-14.984 5.742-22.857 5.742-7.872 0-15.303-4.585-22.856-5.742-7.746-1.187-16.208.933-23.527-1.378-7.443-2.351-13.148-8.966-20.052-12.382"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(322.436 484.998)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v38.077c0 66.407-53.834 120.241-120.241 120.242-66.408 0-120.242-53.834-120.242-120.242V0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(376.242 312.113)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="m0 0 11.801 22.575a40.08 40.08 0 0 0 35.52 21.513h18.812c61.338 0 84.169 46.093 84.169 46.093h4.438a18.036 18.036 0 0 0 16.933-11.827L200.403 0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(155.798 252.994)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h-10.02v60.121H0c16.602 0 30.061-13.459 30.061-30.06v-.001C30.061 13.458 16.602 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(366.222 252.994)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0h10.02v60.121H0c-16.602 0-30.061-13.459-30.061-30.06v-.001C-30.061 13.458-16.602 0 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(145.778 252.994)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-7.194-5.832-13.026-13.026-13.026S-26.052-7.194-26.052 0s5.832 13.026 13.026 13.026S0 7.194 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(312.327 254.614)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0-7.194 5.832-13.026 13.026-13.026S26.052-7.194 26.052 0 20.22 13.026 13.026 13.026 0 7.194 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(199.674 254.614)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v83.167l-10.714 11.611a20.04 20.04 0 0 0-5.312 13.591v22.901c0 8.851 7.175 16.026 16.026 16.026v12.025c0 8.854 7.178 16.032 16.033 16.032h42.084c8.855 0 16.032-7.178 16.032-16.032"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(181.85 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0v83.167l10.714 11.611a20.04 20.04 0 0 1 5.312 13.591v22.901c0 8.851-7.175 16.026-16.026 16.026v12.025c0 8.854-7.178 16.032-16.033 16.032h-42.084c-8.855 0-16.032-7.178-16.032-16.032V0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(330.15 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c-9.033 0-9.033 8.016-18.065 8.016C-27.101 8.016-27.101 0-36.137 0s-9.036 8.016-18.072 8.016C-63.247 8.016-63.247 0-72.284 0"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(292.142 211.296)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0 9.015 8 9.015 8 18.029 0 9.017-8 9.017-8 18.035S8 45.082 8 54.1c0 9.02-8 9.02-8 18.039"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(362.979 7.5)"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={15}
        d="M0 0c0 9.015-8 9.015-8 18.029 0 9.017 8 9.017 8 18.035S-8 45.082-8 54.1c0 9.02 8 9.02 8 18.039"
        data-original="#000000"
        style={{
          strokeWidth: 15,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(149.021 7.5)"
      />
    </g>
  </svg>
  );
}