import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import { STATE } from '@/constants/forms';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-300',
  base: 'group rounded-full inline-flex items-center outline-none relative justify-center tracking-tight',
  size: {
    sm: 'text-16 pl-3.5 pr-3 h-[35px]',
    md: 'text-20 pl-[18px] pr-4 h-[47px]',
  },
  theme: {
    white: 'bg-white text-gray-20 hover:bg-primary-green hover:text-gray-20',
    black: 'bg-gray-12 text-white hover:bg-primary-green',
    green: 'bg-primary-green text-gray-8 hover:bg-white hover:text-gray-20',
  },
};

type ButtonProps<T extends string> = ClassName & {
  href?: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  state?: (typeof STATE)[keyof typeof STATE];
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
};

function Button({
  className: additionalClassName,
  size,
  theme,
  href = undefined,
  children,
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

  if (href) {
    return (
      <Link className={linkClassName} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={linkClassName} disabled={state === STATE.LOADING} {...props}>
      {children}
    </button>
  );
}

export default Button;
