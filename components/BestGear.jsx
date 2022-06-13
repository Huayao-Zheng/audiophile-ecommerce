import React from 'react';

const imgPath = `
   bg-[url(../assets/shared/mobile/image-best-gear.jpg)]    h-[300px]    w-[327px] 
md:bg-[url(../assets/shared/tablet/image-best-gear.jpg)]              md:w-[689px]
lg:bg-[url(../assets/shared/desktop/image-best-gear.jpg)] lg:h-[588px] lg:w-[540px] 
`;

const BestGear = ({ className }) => {
  return (
    <div
      className={`Container flex w-full flex-col items-center gap-y-10 md:gap-y-16 lg:flex-row-reverse lg:justify-between lg:gap-x-6 ${className}`}
    >
      <div className={`rounded-lg bg-cover bg-center bg-no-repeat ${imgPath}`}></div>

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
