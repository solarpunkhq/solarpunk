import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import { STATE } from '@/constants/forms';

import Arrow from '@/svgs/icons/button-arrow.inline.svg';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-300',
  base: 'group font-medium rounded-full inline-flex items-center outline-none relative justify-center tracking-tight',
  size: {
    xs: 'text-14 px-3.5 h-7',
    sm: 'text-16 pl-3.5 pr-3 h-[35px]',
    md: 'text-20 pl-[18px] md:text-18 sm:text-16 pr-4 h-[47px] sm:h-10',
  },
  theme: {
    white: 'bg-white text-gray-20 hover:bg-primary-green hover:text-gray-20',
    black: 'bg-gray-12 text-white hover:bg-primary-green hover:text-gray-8',
    green: 'bg-primary-green text-gray-8 hover:bg-white hover:text-gray-20',
  },
};

type ButtonProps<T extends string> = ClassName & {
  href?: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  withArrow?: boolean;
  state?: (typeof STATE)[keyof typeof STATE];
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  href = undefined,
  children,
  withArrow = false,
  state = STATE.DEFAULT,
  ...props
}: ButtonProps<string>) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  const arrowClassName = clsx('w-5 ml-1.5 transition-all duration-200 group-hover:rotate-90', {
    'fill-white group-hover:fill-gray-8': theme === 'black', // Белая стрелка для темы black
    'fill-current': theme !== 'black', // Иначе текущий цвет текста
  });

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && <Arrow className={arrowClassName} />}
    </>
  );

  if (href) {
    return (
      <Link className={linkClassName} href={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={linkClassName} disabled={state === STATE.LOADING} {...props}>
      {content}
    </button>
  );
}

export default Button;
