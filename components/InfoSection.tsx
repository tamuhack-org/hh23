import { Inter, Zen_Tokyo_Zoo } from 'next/font/google';
import Image from 'next/image';

const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const InfoSection = () => {
  return (
    <>
      <div id="info" className={`${inter.className} flex flex-col items-center border-t-[12px] lg:border-t-[20px] border-lighter-blue px-8 pt-8 lg:pt-12 bg-white w-full`}>
        <div className="flex flex-col justify-center items-center w-full xl:w-[1280px]">
          <h1 className={`${zenTokyoZoo.className} text-center text-turquoise text-3xl lg:text-5xl mb-2`}>
            WELCOME IN, AGGIE!
          </h1>
          <p className="text-xs lg:text-base text-center mb-8 lg:mt-6 lg:px-12">
            HowdyHack is a 24-hour, themed, <b>beginner focused</b> hackathon <b>exclusively for Texas A&M students</b>, designed to showcase TAMU&apos;s diverse range of innovative ideas in a collaborative environment. At the event, you&apos;ll have the opportunity to create your own software and hardware products with up to <b>4 team members</b> that wow judges and win prizes. Go gig &apos;em!
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 lg:gap-12 w-full h-auto">
            <div className="flex flex-col justify-center items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 lg:p-6 w-full gap-2">
              <h2 className="text-turquoise font-bold text-md lg:text-2xl">Location</h2>
              <p className="text-xs lg:text-base">
                Bethancourt Ballroom (MSC 2300)<br />
                730 Olsen Blvd, College Station, TX 77845
              </p>
              <div className="hidden lg:flex flex-row items-center justify-center w-full gap-8 pt-4">
                <Image src="/assets/root-beer.png" width={60} height={200} alt="root-beer" />
                <Image src="/assets/radio.png" width={60} height={200} alt="radio" />
                <Image src="/assets/fries.png" width={40} height={200} alt="fries" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 lg:p-6 w-full gap-2">
              <h2 className="text-turquoise font-bold text-md lg:text-2xl">How to Participate</h2>
              <p className="text-xs lg:text-base">
                <b>Click the apply button above!</b> Sign up ASAP to secure your spot. You will receive a confirmation email letting you know you&apos;re good to go.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Diner booth */}
      <div className="flex flex-col items-center justify-center bg-white -mb-4 pt-4 lg:pt-12">
        <div className="flex flex-row items-center justify-center lg:gap-12">
          <Image src="/assets/diner-booth.png" width={200} height={200} alt="diner-booth" className="hidden lg:flex z-10" />
          <Image src="/assets/diner-booth.png" width={200} height={200} alt="diner-booth" className="z-10" />
          <Image src="/assets/diner-booth.png" width={200} height={200} alt="diner-booth" className="hidden lg:flex z-10" />
        </div>
        <div className="relative w-full h-2 -px-8 bg-[rgb(255,79,128,0.2)] bottom-20 lg:bottom-36 mb-2 lg:mb-3" />
        <div className="relative w-full h-1 bg-[rgb(255,79,128,0.2)] bottom-20 lg:bottom-36" />
      </div>
      {/* Tiles */}
      <div className="bg-tiles w-full bg-cover h-24 xl:h-[147px] bg-white" />
    </>
  )
}

export default InfoSection