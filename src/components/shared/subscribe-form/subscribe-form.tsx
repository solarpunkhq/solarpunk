'use client';

import { useRouter } from 'next/navigation';

import React, { useState } from 'react';

import CustomSearchProvider from '@/utils/custom-search-provider';
import clsx from 'clsx';

import { SEARCH_RESULTS_LIMIT } from '@/constants/forms';

type SearchResult = {
  x: number;
  y: number;
  label: string;
};

function SubscribeForm({ className }: { className: string }) {
  const provider = CustomSearchProvider({
    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || '',
  });

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setError('');
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (query) {
      provider
        .search({ query })
        .then((res) => setSearchResults(res.slice(0, SEARCH_RESULTS_LIMIT)));
    } else {
      setError('Please enter a valid address, neighborhood, city, or ZIP code');
    }
  }

  const router = useRouter();

  function redirectToOnboarding(lat: number, lng: number) {
    router.push(`https://www.solarpunkhq.com/onboarding?lat=${lat}&lng=${lng}`);
  }

  return (
    <form className={clsx('relative max-w-[544px] xs:max-w-full', className)}>
      <input
        className="remove-autocomplete-styles placeholder:text-grey-50 h-12 w-full truncate rounded-full pl-[18px] pr-40 font-medium text-black outline-none placeholder:text-15 placeholder:font-normal placeholder:leading-none placeholder:tracking-tight xs:h-11 xs:pr-[18px]"
        type="text"
        placeholder="Enter your address, neighborhood, city or ZIP code"
        value={query}
        onChange={handleInputChange}
      />
      <button
        className="absolute right-1 top-1/2 h-10 -translate-y-1/2 rounded-full bg-black px-4 text-15 transition-all duration-200 hover:bg-primary-green hover:text-black xs:relative xs:right-0 xs:top-0 xs:mt-2.5 xs:w-full xs:-translate-y-0"
        aria-label="Subscribe"
        onClick={(e) => handleClick(e)}
      >
        <span>Check eligibility</span>
      </button>
      {error && <p className="top-13 absolute right-0 text-12 text-[#be4122]">{error}</p>}
      <ul className="absolute inset-x-0 top-14 overflow-hidden rounded-2xl bg-white text-black">
        {searchResults.map(({ x, y, label }, index) => (
          <li
            key={index}
            className="cursor-pointer px-4 py-2 hover:bg-gray-90"
            onClick={() => redirectToOnboarding(y, x)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SubscribeForm;
