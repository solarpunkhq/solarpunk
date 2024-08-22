import type { Route } from 'next';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { ClassName } from '@/types/classname';

import { STATE } from '@/constants/forms';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-300',
  base: 'group inline-flex items-center outline-none relative justify-center tracking-tight',
  size: {
    md: 'h-10 text-14 px-4 rounded-md',
    sm: 'h-9 text-14 px-4 rounded-md',
  },
  theme: {
    'black-filled': 'bg-[#000] text-[#fff]',
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

  // TODO: use design variable for additional styles for the button
  let design;

  switch (theme) {
    case 'black-filled':
      design = <></>;
      break;
    default:
      design = '';
  }

  let content = null;

  // TODO: add states if needed
  switch (state) {
    case STATE.LOADING:
      content = (
        <>
          <span className="invisible">{children}</span>
          {/* <LoadingIcon /> */}
        </>
      );
      break;
    case STATE.SUCCESS:
      content = (
        <>
          <span className="invisible">{children}</span>
          {/* <SuccessIcon /> */}
        </>
      );
      break;
    case STATE.ERROR:
    case STATE.DEFAULT:
    default:
      content = (
        <>
          {design}
          <span className="relative z-20">{children}</span>
        </>
      );
  }

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
