import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[510px] overflow-hidden bg-[#0E0E0E] md:h-[639px]">
      {/* Hero IMG*/}
      <div className="absolute bottom-0 h-[600px] w-full md:hidden">
        <Image
          src={require('../assets/home/mobile/image-header.jpg')}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 hidden h-[729px] w-full md:block lg:hidden">
        <Image
          src={require('../assets/home/tablet/image-header.jpg')}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 hidden  h-[729px] w-full max-w-[1440px] -translate-x-1/2 lg:block">
        <Image
          src={require('../assets/home/desktop/image-hero.jpg')}
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* Hero info */}
      <div className="Container relative z-10 flex flex-col items-center pt-[108px] text-center text-white lg:items-start lg:text-left">
        <span className="text-overline uppercase text-white/50">NEW PRODUCT</span>

        <h1 className="mx-auto mt-4 mb-6 max-w-[396px] text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:my-6 md:text-h1 lg:mx-0">
          XX99 Mark II Headphones
        </h1>

        <p className="mx-auto mb-7 w-[328px] text-body font-medium text-white/75 md:mb-10 md:w-[349px] lg:mx-0">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music
          enthusiast.
        </p>

        <button className="see-product">SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default Hero;
