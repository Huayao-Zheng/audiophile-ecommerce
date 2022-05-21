import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[510px] overflow-hidden bg-[#0E0E0E] md:h-[639px]">
      <div className="Container relative z-10 flex flex-col items-center pt-[108px] text-center text-white lg:items-start lg:text-left">
        <span className="text-overline uppercase text-white/50">NEW PRODUCT</span>

        <h1 className="mx-auto mt-4 mb-6 max-w-[396px] text-[36px] font-bold uppercase leading-[40px] tracking-[1.29px] md:my-6 md:text-h1 lg:mx-0">
          XX99 Mark II Headphones
        </h1>

        <p className="mx-auto mb-7 w-[328px] text-body font-medium text-white/75 md:mb-10 md:w-[349px] lg:mx-0">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music
          enthusiast.
        </p>

        <button className="h-12 w-40 bg-[#D87D4A] text-subTitle font-bold leading-[18px] hover:bg-[#FBAF85]">
          SEE PRODUCT
        </button>
      </div>

      {/* IMG*/}
      <div
        className={`md: absolute left-1/2 top-[-70px] h-[722px] w-full max-w-[1440px] -translate-x-1/2 bg-[url(../assets/home/Heroimg.png)] bg-cover bg-center bg-no-repeat opacity-50 md:top-[-132px] md:h-[960px] lg:top-[-90px] lg:h-[729px] lg:bg-[url(../assets/home/desktop/image-hero.jpg)]`}
      ></div>
    </div>
  );
};

export default Hero;
