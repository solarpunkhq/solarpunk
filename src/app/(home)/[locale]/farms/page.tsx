import Image from 'next/image';

import Container from '@/components/shared/container';

export default function FarmsPage() {
  return (
    <Container>
      <div className="my-12 grid h-full grid-cols-2">
        <div>
          <Image
            className="rounded-xl"
            src="/studio-1.jpg"
            alt="Farm 1"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </Container>
  );
}
