import React from 'react';
import Image from 'next/image';

const BestGear = ({ className }) => {
  return (
    <div
      className={`Container flex w-full flex-col items-center gap-y-10 md:gap-y-16 lg:flex-row-reverse lg:justify-between lg:gap-x-6 xl:px-0 ${className}`}
    >
      <div className="relative h-[300px] w-full lg:h-[580px] lg:max-w-[540px]">
        <div className="absolute -z-10 h-full w-full md:hidden">
          <Image
            src={require('../assets/shared/mobile/image-best-gear.jpg')}
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full md:block lg:hidden">
          <Image
            src={require('../assets/shared/tablet/image-best-gear.jpg')}
            layout="fill"
            className="hidden object-cover md:block lg:hidden"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full lg:block">
          <Image
            src={require('../assets/shared/desktop/image-best-gear.jpg')}
            layout="fill"
            className="hidden object-cover lg:block"
          />
        </div>
      </div>

      <div className="max-w-xl text-center lg:max-w-md lg:text-left">
        <h2 className="mx-auto mb-8 text-h4 font-bold uppercase tracking-[1px] text-black md:text-h2">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
        </h2>

        <p className="text-body font-medium text-black/50">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </p>
      </div>
    </div>
  );
};

export default BestGear;
