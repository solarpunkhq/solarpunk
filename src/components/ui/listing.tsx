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

import Button from '../shared/button';
import ImageSlider from './image-slider';

export default function Listing({
  title,
  description,
  images,
  amenities,
}: {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  amenities: { icon: React.ElementType; text: string }[];
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 font-title text-3xl">{title}</h1>

      <div className="text-gray-600 mb-4 text-sm">
        <LeafIcon className="mr-1 inline h-4 w-4" />
        <span className="mr-4">Eco-friendly</span>
        <SunIcon className="mr-1 inline h-4 w-4" />
        <span className="mr-4">Solar-powered</span>
        <DumbbellIcon className="mr-1 inline h-4 w-4" />
        <span className="mr-4">Home-gym</span>
        <LaptopIcon className="mr-1 inline h-4 w-4" />
        <span className="mr-4">Co-working space</span>
        <MapPinIcon className="mr-1 inline h-4 w-4" />
        <span>Schleswig Holstein, Germany</span>
      </div>

      <ImageSlider images={images} />

      <div className="relative -mt-2 mb-2 h-3 rounded-b-lg bg-secondary-green " />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="my-4 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-semibold">Studio Apartment</h2>
              <p className="text-gray-600">2 residents · 1 bedrooms · 1 bed · 1 bath</p>
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
            <ul className="grid grid-cols-3 gap-4">
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
          <div className="sticky top-8 -ml-2 -mt-9 mr-4 min-w-[280px] rounded-xl border bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">$999</span> / month
              </div>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="col-span-2 -mb-2 rounded-t-lg border p-2">
                <div className="text-xs font-semibold">STATUS</div>
                <div>Under construction</div>
              </div>
              <div className=" rounded-bl-lg border-b border-l border-r p-2">
                <div className="text-xs font-semibold">MOVE IN-DATE</div>
                <div>2026</div>
              </div>
              <div className="-ml-2 rounded-br-lg border-b border-r p-2">
                <div className="text-xs font-semibold">DEPOSIT</div>
                <div>none</div>
              </div>
            </div>

            <Button
              href="https://cal.com/team/solarpunk"
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
