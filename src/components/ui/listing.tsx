import {
  CarIcon,
  DumbbellIcon,
  LaptopIcon,
  LeafIcon,
  MapPinIcon,
  PlugZap,
  StarIcon,
  SunIcon,
  UtensilsIcon,
  WifiIcon,
} from 'lucide-react';

import useWindowSize from '@/hooks/use-window-size';

import Button from '../shared/button';
import ImageSlider from './image-slider';

export default function Listing({
  title,
  description,
  images,
  amenities,
  apply,
  type,
  rent,
  details,
}: {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  amenities: { icon: React.ElementType; text: string }[];
  apply: string;
  type: string;
  rent: string;
  details: string;
}) {
  return (
    <div className="mx-auto py-8 md:mx-4">
      <h1 className="mb-4 font-title text-3xl">{title}</h1>

      <div className="text-gray-600 mb-2 text-sm">
        <div className="mb-2 inline-block">
          <LeafIcon className="mr-1 inline h-4 w-4" />
          <span className="mr-4">Eco-friendly</span>
        </div>
        <div className="mb-2 inline-block">
          <SunIcon className="mr-1 inline h-4 w-4" />
          <span className="mr-4">Solar-powered</span>
        </div>
        <div className="mb-2 inline-block">
          <DumbbellIcon className="mr-1 inline h-4 w-4" />
          <span className="mr-4">Home-gym</span>
        </div>
        <div className="mb-2 inline-block">
          <LaptopIcon className="mr-1 inline h-4 w-4" />
          <span className="mr-4">Co-working space</span>
        </div>
        <div className="mb-2 inline-block">
          <MapPinIcon className="mr-1 inline h-4 w-4" />
          <span>Schleswig Holstein, Germany</span>
        </div>
      </div>

      <div className="hidden md:block">
        <ImageSlider slides={2} images={images} />
      </div>

      <div className="block md:hidden">
        <ImageSlider slides={1} images={images} />
      </div>

      <div className="relative -mt-2 mb-2 h-3 rounded-b-lg bg-secondary-green " />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="my-4 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold">{type}</h2>
              <p className="text-gray-600">{details}</p>
            </div>
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <img
                src="https://pbs.twimg.com/profile_images/1816814706000080897/uSIidPHz_400x400.png"
                alt="Peer Richelsen"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <hr className="my-6 border-gray-90" />

          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold">About this space</h3>
            <p className="text-gray-600">{description}</p>
            <Button theme="outline" size="home-sm" className="mt-4 p-0">
              Read more
            </Button>
          </div>

          <hr className="my-6 border-gray-90" />

          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold">What the Solarpunk Farm offers</h3>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <amenity.icon className="mr-2 h-5 w-5" />
                  <span>{amenity.text}</span>
                </li>
              ))}
            </ul>
            <Button theme="outline" size="home-sm" className="mt-4 p-0">
              Show all amenities
            </Button>
          </div>
        </div>

        <div>
          <div className="sticky top-8 -mt-9 min-w-[280px] rounded-xl border bg-white p-6 shadow-lg md:-ml-2 md:mr-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">{rent}</span> / month
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="col-span-2 -mb-2 rounded-t-lg border p-2">
                <div className="text-xs font-semibold">STATUS</div>
                <div>Under construction</div>
              </div>
              <div className=" rounded-bl-lg border-b border-l border-r p-2">
                <div className="text-xs font-semibold">READY BY</div>
                <div>2026</div>
              </div>
              <div className="-ml-2 rounded-br-lg border-b border-r p-2">
                <div className="text-xs font-semibold">DEPOSIT</div>
                <div>none</div>
              </div>
            </div>

            <Button
              href={apply}
              target="_blank"
              size="home-md"
              theme="green"
              className="mb-4 w-full"
            >
              Apply for residence
            </Button>
            <div className="text-gray-600 text-center text-sm">You won't be charged yet</div>
          </div>
        </div>
      </div>
    </div>
  );
}
