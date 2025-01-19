import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/shared/container';

export default function FarmsPage() {
  return (
    <Container>
      <div
        className="my-12
       "
      >
        <Link href="/en/farms/0001">
          <Image
            className="mb-4 rounded-xl"
            src="/studio-1.jpg"
            alt="Studio"
            width={1270}
            height={555}
          />
        </Link>

        <Link href="/en/farms/0001">
          <Image
            className="rounded-xl"
            src="/1br-1.jpg"
            alt="1 Bedroom"
            width={1270}
            height={555}
          />
        </Link>
      </div>
    </Container>
  );
}
