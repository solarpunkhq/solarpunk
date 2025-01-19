'use client';

import Image from 'next/image';

import { useRef, useState } from 'react';
import Slider from 'react-slick';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-lg">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="aspect-w-4 aspect-h-3 relative min-h-[300px] px-1">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                fill
              />
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-4 left-4 rounded-full bg-white px-2 py-1 text-sm">
          {currentSlide + 1} / {images.length}
        </div>
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </>
  );
}
