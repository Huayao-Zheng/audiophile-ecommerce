import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import HeadphoneImg from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerImg from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneImg from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

const Images = [
  { category: 'Headphones', path: HeadphoneImg },
  { category: 'Speakers', path: SpeakerImg },
  { category: 'Earphones', path: EarphoneImg },
];

const Category = () => {
  return (
    <div className="Container grid gap-y-4 md:grid-cols-3 md:gap-x-2 lg:gap-x-[30px]">
      {Images.map((img) => (
        <div className="group relative mt-16 flex cursor-pointer flex-col items-center gap-y-4 rounded-lg bg-[#F1F1F1] pt-20 pb-5 font-bold">
          {/* img */}
          <div className="absolute -top-[40%] left-1/2 -translate-x-1/2">
            <div className="relative h-40 w-40">
              <Image src={img.path} layout="fill" className="object-cover" />
            </div>
          </div>

          <h5 className="text-body uppercase leading-[20.49px] tracking-[1.07px] lg:text-h5">
            {img.category}
          </h5>

          <Link href="/headphones">
            <div className="flex items-center justify-center gap-x-3 ">
              <span className="text-subTitle leading-[17.76px] text-black/50 transition group-hover:text-[#D87D4A]">
                SHOP
              </span>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" />
              </svg>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
