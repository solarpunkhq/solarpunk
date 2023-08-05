'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import dw from '@/images/dw.svg'

export default function Herovideo() {
  return (
    <div className="rounded-lg bg-white p-2 shadow-lg">
      <div className="overflow-hidden rounded-md">
        <LiteYouTubeEmbed
          aspectHeight={9}
          aspectWidth={16}
          id="2hwpXCjmkRo"
          title="DW Planet A: Why we should be putting solar panels on our fields"
        />
        <a
          href="https://youtu.be/2hwpXCjmkRo"
          target="_blank"
          rel="noreferrer"
          className="mt-2 block text-center text-sm hover:underline"
        >
          <svg
            width="27"
            height="15"
            className="-mt-px inline-block"
            viewBox="0 0 27 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98011 10.4632H4.31054V4.65442H7.98011C9.61661 4.65442 11.2943 5.47734 11.2943 7.55881C11.2943 9.63999 9.61661 10.4632 7.98011 10.4632ZM7.5637 1.6478C4.31656 1.6478 1.68427 4.2801 1.68427 7.52754C1.68427 10.7747 4.31656 13.407 7.5637 13.407C10.8108 13.407 13.4431 10.7747 13.4431 7.52754C13.4431 4.2801 10.8108 1.6478 7.5637 1.6478Z"
              fill="white"
            />
            <path
              d="M7.75695 6.34563H6.13879V8.77229H7.75695C8.93254 8.77229 9.34805 8.2843 9.34805 7.55911C9.34805 6.83361 8.92953 6.34563 7.75695 6.34563Z"
              fill="white"
            />
            <path
              d="M20.5441 7.72205L19.572 5.06781H18.2506L17.2786 7.72205L16.4996 5.06781H14.7632L16.3979 10.186H17.87L18.9024 7.70821L19.953 10.186H21.425L23.0594 5.06781H21.3234L20.5441 7.72205Z"
              fill="white"
            />
            <path
              d="M21.4251 10.1858H19.9531L18.9026 7.70836L17.8701 10.1858H16.3978L14.7634 5.06795H16.4994L17.2787 7.72188L18.2507 5.06795H19.5719L20.5442 7.72188L21.3232 5.06795H23.0595L21.4251 10.1858ZM7.56374 13.4071C4.3166 13.4071 1.68431 10.7745 1.68431 7.52736C1.68431 4.28022 4.3166 1.64793 7.56374 1.64793C10.8109 1.64793 13.4432 4.28022 13.4432 7.52736C13.4432 10.7745 10.8109 13.4071 7.56374 13.4071ZM18.69 5.82007e-07C16.466 5.82007e-07 14.4684 0.967839 13.095 2.50512C11.7216 0.967839 9.72369 5.82007e-07 7.5 5.82007e-07C3.35779 5.82007e-07 0 3.35779 0 7.5C0 11.6422 3.35779 15 7.5 15C9.72369 15 11.7216 14.0322 13.095 12.4946C14.4684 14.0322 16.466 15 18.69 15C22.8319 15 26.1897 11.6422 26.1897 7.5C26.1897 3.35779 22.8319 5.82007e-07 18.69 5.82007e-07Z"
              fill="#0C2950"
            />
            <path
              d="M7.75697 8.77222H6.13881V6.34558H7.75697C8.92955 6.34558 9.34807 6.83356 9.34807 7.55906C9.34807 8.28425 8.93255 8.77222 7.75697 8.77222ZM7.98006 4.65436H4.31049V10.4631H7.98006C9.61656 10.4631 11.2942 9.64022 11.2942 7.55874C11.2942 5.47726 9.61656 4.65436 7.98006 4.65436Z"
              fill="#0C2950"
            />
          </svg>
          : Why we should be putting solar panels on our fields
        </a>
      </div>
    </div>
  )
}
