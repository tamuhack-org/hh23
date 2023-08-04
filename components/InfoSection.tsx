import { Notable, Zen_Tokyo_Zoo } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] });
const notable = Notable({ weight: '400', subsets: ['latin'] });

const InfoSection = () => {
  return (
    <>
      <div id="info" className="flex flex-col items-center border-t-[12px] lg:border-t-[20px] 2xl:border-t-[32px] border-lighter-blue px-8 pt-8 lg:pt-20 bg-white w-full z-50">
        <div className="flex flex-col justify-center items-center w-full xl:w-[1280px]">
          <h1 className={`${zenTokyoZoo.className} text-center text-turquoise text-3xl lg:text-6xl mb-2`}>
            WELCOME IN, AGGIES!
          </h1>
          <p className="text-xs lg:text-lg text-center mb-8 lg:mb-16 lg:mt-6 lg:px-12">
            HowdyHack is a 24-hour, themed, <b>beginner focused</b> hackathon <b>exclusively for Texas A&M students</b>, designed to showcase TAMU&apos;s diverse range of innovative ideas in a collaborative environment. At the event, you&apos;ll have the opportunity to create your own software and hardware products with up to <b>4 team members</b> that wow judges and win prizes. Go gig &apos;em!
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-4 lg:gap-12 w-full h-auto">
            <div className="flex flex-col justify-center items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 lg:p-6 w-full gap-2 lg:gap-3">
              <h2 className="text-turquoise font-black text-md lg:text-2xl">Location</h2>
              <p className="text-xs lg:text-lg">
                Bethancourt Ballroom (MSC 2300)<br />
                730 Olsen Blvd, College Station, TX 77845
              </p>
              <Link href="/assets/msc-map.png" target="_blank" rel="noopener" className="underline font-bold text-xs lg:text-lg mt-2 hover:opacity-75 transition duration-200">
                View Building Map
              </Link>
              <div className="hidden lg:flex flex-row items-center justify-center w-full gap-12 pt-6">
                <Image src="/assets/root-beer.png" width={60} height={200} alt="root-beer" />
                <Image src="/assets/radio.png" width={60} height={200} alt="radio" />
                <Image src="/assets/fries.png" width={40} height={200} alt="fries" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 lg:p-6 w-full gap-2 lg:gap-3">
            <h2 className="text-turquoise font-black text-md lg:text-2xl">How to Participate</h2>
              <p className="text-xs lg:text-lg">
              To get started, <b>click the apply button above!</b> Sign up as soon as possible to secure your spot and qualify for a care package!
              <br />
              <br />
              After you sign up, you will receive a confirmation email letting you know you&apos;re good to go. You can either form a team yourself, or you find one during the team building portion right before the competition!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Diner booth */}
      <div className="flex flex-col items-center justify-center bg-white -mb-6 pt-4 lg:pt-24">
        <div className="flex flex-row items-center justify-center lg:gap-12">
          <Image src="/assets/diner-booth-1.png" width={200} height={200} alt="diner-booth" className="hidden lg:flex z-10" />
          <Image src="/assets/diner-booth-2.png" width={200} height={200} alt="diner-booth" className="z-10" />
          <Image src="/assets/diner-booth-3.png" width={200} height={200} alt="diner-booth" className="hidden lg:flex z-10" />
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