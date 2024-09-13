'use client';

import React, { useEffect, useState } from 'react';

import customSearchProvider from '@/utils/custom-search-provider';
import clsx from 'clsx';

import Link from '@/components/shared/link';

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

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

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
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <form className={clsx('relative max-w-[544px] xs:max-w-full', className)}>
      <input
        className="remove-autocomplete-styles placeholder:text-grey-50 h-12 w-full truncate rounded-full border border-[#EBEBEB] pl-[18px] pr-11 text-15 font-medium text-gray-12 outline-none placeholder:font-normal placeholder:leading-none placeholder:tracking-tight xs:h-11 xs:text-14"
        type="text"
        placeholder="Enter your address, neighborhood, city or ZIP code"
        value={query}
        onChange={handleInputChange}
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
      {searchResults && searchResults.length > 0 && (
        <ul className="absolute inset-x-0 top-[58px] overflow-hidden rounded-[10px] border border-[#EBEBEB] bg-white p-1 text-15 leading-none tracking-tight text-gray-12 xs:top-[54px]">
          {searchResults.map(({ x, y, label }, index) => (
            <li key={index} className="cursor-pointer rounded-lg px-2.5 py-3 hover:bg-gray-90">
              <Link
                href={`https://www.solarpunkhq.com/onboarding?lat=${y}&lng=${x}`}
                target="_blank"
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
