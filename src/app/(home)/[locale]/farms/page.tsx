import Image from 'next/image';
import Link from 'next/link';

import { DumbbellIcon, LaptopIcon, LeafIcon, MapPinIcon, SunIcon } from 'lucide-react';

import Container from '@/components/shared/container';

export default function FarmsPage() {
  return (
    <Container>
      <div
        className=" mx-auto my-12 flex max-w-screen-lg justify-center 
       "
      >
        <div>
          <Link href="/en/farms/0001">
            <Image
              className="mb-4 rounded-xl"
              src="/studio-1.jpg"
              alt="Studio"
              width={1270}
              height={555}
            />
            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Solarpunk Farm #0001 – Studio Apartment
              </h2>

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
            </div>
          </Link>

          <hr className="my-4 border-gray-90" />

          <Link href="/en/farms/0002">
            <Image
              className="mb-4 rounded-xl"
              src="/1br-1.jpg"
              alt="1 Bedroom"
              width={1270}
              height={555}
            />

            <div>
              <h2 className="mb-2 text-2xl font-semibold">
                Solarpunk Farm #0002 – 1 Bedroom Apartment
              </h2>
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
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
