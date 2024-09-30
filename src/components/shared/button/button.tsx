import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import { STATE } from '@/constants/forms';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-300',
  base: 'group font-medium rounded-full inline-flex items-center outline-none relative justify-center tracking-tight',
  size: {
    'home-xs': 'text-14 px-[15px] h-7',
    'home-sm': 'text-16 pl-3.5 pr-4 h-[35px]',
    'home-md':
      'text-20 pl-5 home-md:text-18 home-sm:text-16 pr-[19px] h-[47px] home-sm:h-10 home-md:h-11',
  },
  theme: {
    white: 'bg-white text-gray-20',
    black: 'bg-gray-12 text-white',
    green: 'bg-primary-green text-gray-8',
  },
  hoverDefault: {
    white: 'hover:bg-primary-green hover:text-gray-20',
    black: 'hover:bg-primary-green hover:text-gray-8',
    green: 'hover:bg-white hover:text-gray-20',
  },
  hoverForArrowBtn: {
    white: 'hover:bg-gray-98',
    black: 'hover:bg-gray-20',
    green: 'hover:bg-[#e3ff58]',
  },
};

type ButtonProps<T extends string> = ClassName & {
  href?: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  disabled?: boolean;
  children: React.ReactNode;
  withArrow?: boolean;
  state?: (typeof STATE)[keyof typeof STATE];
  target?: string;
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  disabled,
  href = undefined,
  children,
  withArrow = false,
  state = STATE.DEFAULT,
  target = undefined,
  rel = undefined,
  ...props
}: ButtonProps<string>) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    withArrow ? theme && styles.hoverForArrowBtn[theme] : theme && styles.hoverDefault[theme],
    additionalClassName,
    disabled && 'cursor-not-allowed opacity-50',
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            'ml-2.5 w-[13px] transition-[transform,color] duration-200 ease-linear group-hover:-translate-y-0.5 group-hover:translate-x-0.5 home-sm:ml-[7px]',
            theme === 'black' ? 'text-white' : 'text-current',
          )}
        >
          <path
            className="arrow-head transition-[transform,color] duration-200 ease-linear group-hover:translate-x-0 group-hover:translate-y-0"
            d="M6 1H13V8"
            stroke="currentColor"
            strokeWidth="1.64"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="arrow-body -translate-y-[1px] translate-x-[1px] transition-[transform,color] duration-200 ease-linear group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            d="M1 13L11 3"
            stroke="currentColor"
            strokeWidth="1.64"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link className={linkClassName} href={href} target={target} rel={rel} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={linkClassName} disabled={state === STATE.LOADING || disabled} {...props}>
      {content}
    </button>
  );
}

export default Button;
