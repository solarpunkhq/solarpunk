'use client';

import { Route } from 'next';
import { useTranslations } from 'next-intl';

import React, { useEffect, useRef, useState } from 'react';

import customSearchProvider from '@/utils/custom-search-provider';
import clsx from 'clsx';

import Link from '@/components/shared/link';

import useClickOutside from '@/hooks/use-click-outside';

import { SEARCH_RESULTS_LIMIT } from '@/constants/forms';

import clearIcon from '@/svgs/icons/clear.svg';
import searchIcon from '@/svgs/icons/search.svg';

type SearchResult = {
  x: number;
  y: number;
  label: string;
};

function SearchForm({ className }: { className: string }) {
  const provider = customSearchProvider({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
  });

  const t = useTranslations('translations');

  const wrapperRef = useRef(null);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (query) {
      provider
        .search({ query })
        .then((res) => setSearchResults(res.slice(0, SEARCH_RESULTS_LIMIT)));
    }
  }, [query]);

  function handleClear() {
    setQuery('');
    setSearchResults([]);
    setHighlightedIndex(-1);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setHighlightedIndex(-1);
  }

  const onOutsideClick = () => {
    setIsOpen(false);
  };
  useClickOutside([wrapperRef], onOutsideClick);

  // Function to handle key press events for arrow key navigation
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!searchResults.length) {
      return;
    }
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : searchResults.length - 1));
    } else if (e.key === 'Enter') {
      const basePath =
        window.location.origin + window.location.pathname.split('/').slice(0, 2).join('/');
      if (highlightedIndex >= 0) {
        const selectedResult = searchResults[highlightedIndex];
        if (selectedResult) {
          window.location.href = `${basePath}/onboarding?lat=${selectedResult.y}&lng=${selectedResult.x}`;
        }
      } else {
        const selectedResult = searchResults[0];
        if (selectedResult) {
          window.location.href = `${basePath}/onboarding?lat=${selectedResult.y}&lng=${selectedResult.x}`;
        }
      }
    }
  }

  return (
    <form
      className={clsx('relative max-w-[544px] home-xs:max-w-full', className)}
      ref={wrapperRef}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="remove-autocomplete-styles placeholder:text-grey-50 h-12 w-full truncate rounded-full border border-[#EBEBEB] pl-[18px] pr-11 text-15 font-medium text-gray-12 outline-none placeholder:font-normal placeholder:leading-none placeholder:tracking-tight home-xs:h-11 home-xs:text-14"
        type="text"
        placeholder={t('hero_search_form')}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {query ? (
        <button
          className="absolute right-[18px] top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center"
          type="button"
          aria-label="clear input"
          onClick={handleClear}
        >
          <img width={16} height={16} src={clearIcon} alt="" />
        </button>
      ) : (
        <img
          className="absolute right-[18px] top-1/2 w-4 -translate-y-1/2"
          width={16}
          height={16}
          src={searchIcon}
          alt=""
        />
      )}
      {searchResults && isOpen && searchResults.length > 0 && (
        <ul className="absolute inset-x-0 top-[58px] overflow-hidden rounded-[10px] border border-[#EBEBEB] bg-white p-1 text-15 leading-none tracking-tight text-gray-12 home-xs:top-[54px]">
          {searchResults.map(({ x, y, label }, index) => (
            <li key={index}>
              <Link
                className={clsx(
                  'flex rounded-lg px-2.5 py-3 hover:bg-gray-90',
                  highlightedIndex === index && 'bg-gray-90',
                )}
                href={`/onboarding?lat=${y}&lng=${x}` as Route<string>}
                rel="noopener noreferrer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;
