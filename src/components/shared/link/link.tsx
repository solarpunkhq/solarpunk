import type { Route } from 'next';
import NextLink from 'next/link';

import clsx from 'clsx';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-200',
  // FIXME: Add base styles
  base: 'inline-flex items-center',
  // FIXME: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       Check out an example by a link above for better understanding
  size: {
    md: 'text-16 tracking-tight',
    sm: 'text-15 tracking-tight',
    xs: 'text-14 tracking-tight',
  },
  // FIXME: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-underline"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    white: 'text-white hover:text-gray-80',
    gray: 'text-gray-94 hover:text-gray-70',
    black: 'text-black hover:text-gray-20',
  },
};

type LinkProps<T extends string = string> = {
  className?: string;
  href: Route<T> | URL;
  size?: keyof typeof styles.size;
  theme?: keyof typeof styles.theme;
  children: React.ReactNode;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  withArrow?: boolean;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

function Link({
  className: additionalClassName,
  size,
  theme,
  href,
  children,
  ...props
}: LinkProps) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );

  /*
    Using next/link component only for internal navigation.
    https://github.com/vercel/next.js/blob/canary/errors/invalid-href-passed.md
  */
  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {children}
    </a>
  );
}

export default Link;
