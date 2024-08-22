import { usePathname } from 'next/navigation';

import { useEffect, useState } from 'react';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return { isMobileMenuOpen, toggleMobileMenu };
};
