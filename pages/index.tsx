import Image from 'next/image'
import { Archivo } from 'next/font/google'
import Link from 'next/link'
import SmallNavbar from '../components/SmallNavbar'
import { saturdayScheduleItems, sundayScheduleItems } from '../data/constants'
import Receipt from '../components/Receipt'
import Navbar from '@/components/Navbar'
import InfoSection from '@/components/InfoSection'
import FaqSection from '@/components/FaqSection'
import PrizesSection from '@/components/PrizesSection'
import ResourcesSection from '@/components/ResourcesSection'
import Footer from '@/components/Footer'

const archivo = Archivo({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${archivo.className}`}
    >
      <div className="bg-dark-purple">
        {/* Navbar */}
        <Navbar />
        {/* Small Navbar */}
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
        <InfoSection />
        <FaqSection />
        <div className="w-full bg-waves bg-cover h-[283px] bg-paler-yellow" />
        {/* Schedule section */}
        <div id="schedule" className="flex flex-col items-center bg-schedule-blue w-full px-4 pt-4 lg:pt-0 pb-16 gap-8 lg:gap-16">
          <Image src="/assets/schedule-title.png" width={500} height={200} alt="schedule-title" className="lg:hidden" />
          <Image src="/assets/schedule-title-big.png" width={700} height={200} alt="schedule-title" className="hidden lg:flex" />
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-center max-[1206px]:w-full w-[1206px] gap-8">
            <Receipt day="SATURDAY" scheduleItems={saturdayScheduleItems} />
            <Receipt day="SUNDAY" scheduleItems={sundayScheduleItems} />
            <Image src="/assets/retro-rev.png" width={250} height={200} alt="retro-rev" className="hidden lg:flex lg:absolute lg:bottom-16 lg:right-40 xl:right-48" />
          </div>
        </div>
        {/* Schedule to Prizes transition */}
        <div className="w-full bg-prizes-gray h-6" />
        <div className="w-full bg-schedule-blue h-2" />
        <div className="w-full bg-prizes-gray h-5" />
        <div className="w-full bg-schedule-blue h-1" />
        <div className="w-full bg-prizes-gray h-5" />
        <div className="w-full bg-schedule-blue h-[2px]" />
        {/* Prizes section */}
        <PrizesSection />
        {/* Prizes to Resources transition */}
        <div className="bg-tiles w-full bg-cover h-24 xl:h-[147px] bg-white flex flex-col justify-between">
          <div className="w-full bg-gradient-to-b from-prizes-gray from-10% to-transparent h-12 xl:h-[73px]" />
          <div className="w-full bg-gradient-to-t from-white from-10% to-transparent h-12 xl:h-[73px]" />
        </div>
        <ResourcesSection />
        {/* Resources to Footer transition */}
        <div className="relative w-full bg-cover h-24 xl:h-[147px] bg-resources-pink flex flex-col justify-between">
          <div className="bg-tiles bg-cover w-full h-24 xl:h-[147px] flex flex-col opacity-20" />
          <div className="absolute w-full bg-gradient-to-b from-white from-10% to-transparent h-24 xl:h-[73px]" />
        </div>
        <div className="relative w-full bg-cover h-24 xl:h-[147px] bg-resources-pink flex flex-col justify-between">
          <div className="bg-tiles bg-cover w-full h-24 xl:h-[147px] flex flex-col opacity-20" />
          <div className="absolute w-full bottom-0 bg-gradient-to-t from-pale-pink from-10% to-transparent h-12 xl:h-[73px]" />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main >
  )
};
