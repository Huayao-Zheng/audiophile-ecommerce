import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsGrid = () => {
  return (
    <div className="mx-auto grid w-[327px] max-w-[calc(1110px+5rem)] gap-y-6 md:w-[689px] md:grid-cols-2 md:gap-y-8 md:gap-x-3 lg:w-full lg:gap-y-12 lg:gap-x-[30px] lg:px-10 ">
      {/* item1 */}
      <div className="overflow-hidden rounded-lg bg-[#D87D4A] bg-[url(../assets/home/desktop/pattern-circles.svg)] bg-cover bg-[center_top_-125px] bg-no-repeat px-6 py-14 text-center text-white md:col-span-2 md:bg-[center_top_-164px] lg:flex lg:h-[560px] lg:items-end lg:justify-center lg:gap-[150px] lg:bg-[length:86%] lg:bg-[left_-173px_top_7%] lg:p-0 lg:text-left">
        <div className="relative mx-auto mb-8 h-[207px] w-[172px] md:mb-14 md:h-[237px] md:w-[197px] lg:m-0 lg:h-[449px] lg:w-[376px] lg:translate-y-2">
          <Image
            src={require('../assets/home/desktop/image-speaker-zx9.png')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="lg:self-center">
          <h1 className="text-[36px] font-bold leading-[40px] tracking-[1.29px] md:text-h1">
            ZX9 <br />
            SPEAKER
          </h1>
          <p className="mx-auto my-6 max-w-[349px] text-body font-medium opacity-75 md:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>

          <Link href={`product/zx9-speaker`}>
            <button className="h-12 w-40 bg-black text-subTitle font-bold leading-[18px] hover:bg-[#4C4C4C]">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* item2 */}
      <div className="relative flex h-[320px] flex-col justify-center md:col-span-2">
        <div className="absolute -z-10 h-full w-full md:hidden">
          <Image
            src={require('../assets/home/mobile/image-speaker-zx7.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full md:block lg:hidden">
          <Image
            src={require('../assets/home/tablet/image-speaker-zx7.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full lg:block">
          <Image
            src={require('../assets/home/desktop/image-speaker-zx7.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>

        <div className="space-y-8 pl-6 md:pl-16 lg:pl-24">
          <h1 className="text-h4 font-bold">ZX7 SPEAKER</h1>
          <Link href={`product/zx7-speaker`}>
            <button className="h-12 w-40 border border-black text-subTitle font-bold leading-[18px] hover:bg-black hover:text-white">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* item3 */}
      <div className="relative h-[200px] md:h-[320px]">
        <div className="absolute -z-10 h-full w-full md:hidden">
          <Image
            src={require('../assets/home/mobile/image-earphones-yx1.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full md:block lg:hidden">
          <Image
            src={require('../assets/home/tablet/image-earphones-yx1.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute -z-10 hidden h-full w-full lg:block">
          <Image
            src={require('../assets/home/desktop/image-earphones-yx1.jpg')}
            alt="speaker"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex h-[200px] flex-col justify-center gap-8 rounded-lg bg-[#F1F1F1] pl-6 text-black md:h-[320px] md:pl-10">
        <h1 className="text-h4 font-bold">YX1 EARPHONES</h1>

        <Link href={`product/yx1-earphones`}>
          <button className="h-12 w-40 border border-black text-subTitle font-bold leading-[18px] hover:bg-black hover:text-white">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsGrid;
