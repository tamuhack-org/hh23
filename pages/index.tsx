import Image from 'next/image'
import { Archivo, Zen_Tokyo_Zoo, Inter } from 'next/font/google'
import Link from 'next/link'
import SmallNavbar from './components/SmallNavbar'
import { faqMenuItems, prizes, saturdayScheduleItems, sundayScheduleItems } from './constants'
import FaqMenuItem from './components/FaqMenuItem'
import Receipt from './components/Receipt'

const archivo = Archivo({ subsets: ['latin'] });
const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${archivo.className}`}
    >
      <div className="bg-dark-purple">
        <div className="hidden lg:flex items-center justify-between px-8 xl:px-32 py-4 w-full bg-dark-purple z-50 text-pale-yellow border-b-3 border-pale-yellow">
          <div className="w-1/3">
            <Link href="/"
              className="text-3xl rounded-full font-black font-heading navy">
              <Image src="/assets/hh-logo.png" width={50} height={50} alt="hh-logo" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8 w-1/3 font-bold text-lg">
            <Link href="#info">
              Info
            </Link>
            <Link href="#faq">
              FAQ
            </Link>
            <Link href="#schedule">
              Schedule
            </Link>
            <Link href="#prizes">
              Prizes
            </Link>
            <Link href="#sponsors">
              Resources
            </Link>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <Link href="https://tamuhack.org" target="_blank" rel="noopener" className="xl:flex text-4xl font-bold mr-8 ">
              th
            </Link>
          </div>
        </div>
        <div className="lg:hidden my-0 w-full bg-dark-purple border-b-2 border-pale-yellow">
          <SmallNavbar />
        </div>
        {/* Landing section */}
        <div className="flex flex-col h-auto mt-6 lg:h-screen w-full lg:flex-row px-8 items-center justify-between pt-6 pb-6 lg:pb-0 lg:pt-0 bg-mountain-stars-small lg:bg-mountain-stars bg-cover border-turquoise border-b-[12px]">
          <div className="flex flex-col items-center w-full gap-4">
            <div className="flex flex-col items-center w-full gap-2 text-pale-yellow font-bold text-xl">
              <h1>
                September 9-10, 2023
              </h1>
              <h1>
                Texas A&M University
              </h1>
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-3 font-extrabold text-sm">
              <Link href="#" className="py-2 w-32 text-center bg-pale-yellow rounded-lg border-pale-yellow border-2">
                APPLY
              </Link>
              <Link href="#" className="py-2 w-32 text-center bg-transparent rounded-lg border-pale-yellow border-2 text-pale-yellow">
                MENTOR
              </Link>
            </div>
          </div>
          <Image src="/assets/diner-sign.png" width={400} height={300} alt="diner-sign" className="-mb-8" />
        </div>
        {/* Info section */}
        <div className={`${inter.className} flex flex-col items-center border-t-[12px] border-lighter-blue px-8 pt-8 bg-white w-full`}>
          <h1 className={`${zenTokyoZoo.className} text-center text-turquoise text-xl mb-2`}>
            WELCOME IN, AGGIE!
          </h1>
          <p className="text-xs text-center mb-8">
            HowdyHack is a 24-hour, themed, <b>beginner focused</b> hackathon <b>exclusively for Texas A&M students</b>, designed to showcase TAMU&apos;s diverse range of innovative ideas in a collaborative environment. At the event, you&apos;ll have the opportunity to create your own software and hardware products with up to <b>4 team members</b> that wow judges and win prizes. Go gig &apos;em!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <div className="flex flex-col justify-center items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 w-full gap-2">
              <h2 className="text-turquoise font-bold text-md">Location</h2>
              <p className="text-xs">
                Bethancourt Ballroom (MSC 2300)<br />
                730 Olsen Blvd, College Station, TX 77845
              </p>
            </div>
            <div className="flex flex-col justify-center items-start border-[rgb(255,79,128,0.5)] border-double rounded-3xl border-8 p-5 w-full gap-2">
              <h2 className="text-turquoise font-bold text-md">How to Participate</h2>
              <p className="text-xs">
                Click the apply button above! Sign up ASAP to secure your spot. You will receive a confirmation email letting you know you&apos;re good to go.
              </p>
            </div>
          </div>
        </div>
        {/* Diner booth */}
        <div className="flex flex-col items-center justify-center bg-white -mb-4 pt-4">
          <Image src="/assets/diner-booth.png" width={200} height={200} alt="diner-booth" className="z-10" />
          <div className="relative w-full h-2 -px-8 bg-[rgb(255,79,128,0.2)] bottom-20 mb-2" />
          <div className="relative w-full h-1 bg-[rgb(255,79,128,0.2)] bottom-20" />
        </div>
        {/* Tiles */}
        <div className="bg-tiles w-full bg-cover h-24 xl:h-[147px] bg-white" />
        {/* FAQ Section */}
        <div className="flex flex-col items-center justify-center bg-paler-yellow pt-12">
          <div className="relative w-full h-4 bg-white -top-10 mb-2" />
          {/* Top menu border */}
          <div className="relative flex flex-col w-full bg-black border-white border-dashed border-b-16 pt-3 rounded-t-xl">
            <div className="absolute w-[40px] bg-black h-[40px] -mt-3 rounded-tl-xl" />
            <div className="absolute right-0 w-[40px] bg-black h-[40px] -mt-3 rounded-tr-xl" />
          </div>
          <div className="flex flex-col w-full bg-black px-3 py-3">
            <div className="flex flex-col w-full bg-black border-white border-dashed border-x-16 px-3">
              <div className="flex flex-col w-full bg-white p-6 gap-4">
                {faqMenuItems.map((faqMenuItem, i) =>
                  <FaqMenuItem question={faqMenuItem.question} answer={faqMenuItem.answer} key={i} />
                )}
              </div>
            </div>
          </div>
          {/* Bottom menu border */}
          <div className="relative flex flex-col w-full bg-black border-white border-dashed border-t-16 pb-3 rounded-b-xl">
            <div className="absolute bottom-0 w-[40px] bg-black h-[40px] rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-[40px] bg-black h-[40px] rounded-br-xl" />
          </div>
        </div>
        <div className="w-full bg-waves bg-cover h-[283px] bg-paler-yellow" />
        {/* Schedule section */}
        <div className="flex flex-col items-center bg-schedule-blue w-full px-4 pt-4 pb-16 gap-8">
          <Image src="/assets/schedule-title.png" width={500} height={200} alt="schedule-title" />
          <Receipt day="SATURDAY" scheduleItems={saturdayScheduleItems} />
          <Receipt day="SUNDAY" scheduleItems={sundayScheduleItems} />
        </div>
        {/* Schedule to Prizes transition */}
        <div className="w-full bg-prizes-gray h-6" />
        <div className="w-full bg-schedule-blue h-2" />
        <div className="w-full bg-prizes-gray h-5" />
        <div className="w-full bg-schedule-blue h-1" />
        <div className="w-full bg-prizes-gray h-5" />
        <div className="w-full bg-schedule-blue h-[2px]" />
        {/* Prizes section */}
        <div className="flex flex-col items-center justify-center bg-prizes-gray w-full px-4 py-8">
          <div className="flex flex-col items-center justify-center max-[593px]:w-full w-[593px] rounded-2xl border-prizes-light-gray border-4 p-4 sm:p-10 gap-6">
            <Image src="/assets/prizes-title.png" width={500} height={200} alt="prizes-title" />
            <div className="flex flex-col w-full items-center justify-center gap-6">
              {prizes.map((prize, i) =>
                <div className="flex flex-row justify-center items-center w-full gap-4" key={i}>
                  <Image src="/assets/mint-green-circle.svg" width={12} height={12} alt="mint-green-circle" />
                  <div className="flex flex-col rounded-3xl w-full bg-white border-4 border-mint-green p-3 gap-1">
                    <h1 className="font-bold text-sm">{prize.title}</h1>
                    <p className="text-xs">{prize.description}</p>
                    <h2 className="font-bold text-xs">{prize.prize}</h2>
                  </div>
                  <Image src="/assets/mint-green-circle.svg" width={12} height={12} alt="mint-green-circle" />
                </div>
              )}
              <div className="flex flex-row justify-between items-center w-full gap-6 mt-4">
                <div className="bg-prizes-light-gray w-1/2 h-12 rounded-3xl" />
                <div className="flex flex-row justify-end items-center w-1/2 gap-2">
                  <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
                  <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
                  <Link href="#">
                    <Image src="/assets/hacker-queue.png" width={100} height={20} alt="hacker-queue" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Prizes to Resources transition */}
        <div className="bg-tiles w-full bg-cover h-24 xl:h-[147px] bg-white flex flex-col justify-between">
          <div className="w-full bg-gradient-to-b from-prizes-gray from-10% to-transparent h-12 xl:h-[73px]" />
          <div className="w-full bg-gradient-to-t from-white from-10% to-transparent h-12 xl:h-[73px]" />
        </div>
        {/* Resources section */}
      </div>
    </main>
  )
};
