import Image from 'next/image';

import { useState } from 'react';
import { useEffect } from 'react';

import { getCalApi } from '@calcom/embed-react';
import {
  Beef,
  Bitcoin,
  Building2,
  BusFront,
  CarIcon,
  Carrot,
  CigaretteOff,
  DumbbellIcon,
  EarOff,
  Fence,
  Heater,
  LaptopIcon,
  LeafIcon,
  MapPinIcon,
  MoonStar,
  Plane,
  PlugZap,
  Proportions,
  ShoppingBasket,
  Sprout,
  StarIcon,
  SunIcon,
  ThermometerSun,
  ThumbsDown,
  TreePalm,
  UtensilsIcon,
  VerifiedIcon,
  WifiIcon,
} from 'lucide-react';

import Button from '../shared/button';
import ImageSlider from './image-slider';

export default function Listing({
  title,
  description,
  moreDescription,
  images,
  apply,
  type,
  rent,
  details,
  squareMeters,
}: {
  title: string;
  description: React.ReactNode;
  moreDescription?: React.ReactNode;
  images: { src: string; alt: string }[];
  apply: string;
  type: string;
  squareMeters?: string;
  rent: string;
  details: string;
}) {
  const amenities = [
    { icon: WifiIcon, text: 'high-speed fiber WiFi' },
    { icon: LaptopIcon, text: 'coworking space included' },
    { icon: Carrot, text: 'homegrown vegetables' },
    { icon: Beef, text: 'local-grown beef' },
    { icon: Sprout, text: 'heated greenhouse' },
    { icon: ThermometerSun, text: 'cedar hot tub included' },
    { icon: Fence, text: 'large garden included' },
    { icon: EarOff, text: 'quiet environment' },
    { icon: MoonStar, text: 'clear, dark skies' },
    { icon: Heater, text: 'sauna included' },
    { icon: Bitcoin, text: 'bitcoin-mining heating system' },
    { icon: PlugZap, text: 'electric car charging included' },
    { icon: CarIcon, text: 'parking on premises included' },
    { icon: UtensilsIcon, text: 'fully equipped kitchen' },
    { icon: CigaretteOff, text: 'no smoking' },
    { icon: ShoppingBasket, text: '4min to closest supermarket' },
    { icon: Building2, text: '15min to closest city' },
    { icon: TreePalm, text: '20min to closest beach' },
    { icon: Plane, text: '90min to international airport' },
    { icon: BusFront, text: 'airport shuttle available' },
  ];

  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '0001-studio' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
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
              <Image
                src="/landlord.jpeg"
                alt="Peer Richelsen"
                className="h-full w-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>

          <hr className="my-6 border-gray-90" />

          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold">About this Solarpunk Farm</h3>
            <div className="prose">
              <p className="text-gray-600">{description}</p>
              {showMore && <p className="text-gray-600">{moreDescription}</p>}
              {!showMore && <p>...</p>}
            </div>
            {!showMore && (
              <Button
                theme="outline"
                size="home-sm"
                className="mt-4 p-0"
                onClick={() => setShowMore(!showMore)}
              >
                Read more
              </Button>
            )}
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
              <li className="flex items-center">
                <ThumbsDown className="mr-2 h-5 w-5" />
                <s>bad vibes</s>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-90" />
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold">Closest city</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85506.94828730404!2d9.399120084460916!3d54.78637612322894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b342bd1a1ab9e9%3A0x5bcf632c834e4467!2sFlensburg!5e1!3m2!1sen!2sde!4v1737900164846!5m2!1sen!2sde"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <hr className="my-6 border-gray-90" />
          <div className="mb-6">
            <h3 className="mb-2 text-xl font-semibold">About the landlord</h3>
            <div className="flex items-center gap-2">
              <div className="rounded-lg p-4 text-center">
                <Image
                  src="/landlord.jpeg"
                  alt="Peer Richelsen"
                  className="h-full w-full rounded-full object-cover"
                  width={100}
                  height={100}
                />
                <VerifiedIcon className=" absolute -mt-4 ml-10 rounded-full bg-secondary-green" />
                <h2 className="mt-3 text-xl font-semibold">Peer</h2>
                <h2 className="-mt-1 text-xs">Host</h2>
              </div>
              <div>
                <p className="text-gray-600">
                  Peer Richelsen is the cofounder of Cal.com, angel investor and open source
                  evangelist. Together with his partner they recently moved on a farm and are
                  building a unique new coliving experience.
                </p>
                <div className="flex gap-2">
                  <Button
                    theme="black"
                    size="home-sm"
                    href="https://x.com/peer_rich"
                    className="mt-4 p-0"
                  >
                    X.com
                  </Button>
                  <Button
                    theme="outline"
                    size="home-sm"
                    href="linkedin.com/in/peer-richelsen-221233138"
                    className="mt-4 p-0"
                  >
                    Linkedin
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-90" />
        </div>

        <div>
          <div className="sticky top-8 -mt-9 min-w-[280px] rounded-xl border bg-white p-6 shadow-lg md:-ml-2 md:mr-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">{rent}</span> / month
              </div>
              <div className="flex items-center">
                <Proportions className="mr-1 h-4 w-4" />
                <span className="font-semibold">{squareMeters}</span>
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
              size="home-md"
              data-cal-namespace="0001-studio"
              data-cal-link={apply}
              data-cal-config='{"layout":"month_view"}'
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
