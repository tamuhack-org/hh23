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
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import { motion } from 'framer-motion'

const archivo = Archivo({ subsets: ['latin'] });

export default function Home() {
  const [isRevHovered, setIsRevHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scheduleItems, setScheduleItems] = useState([]);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });
  const onMouseEnter = () => setIsRevHovered(true);
  const onMouseLeave = () => setIsRevHovered(false);

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = carPosition;
    setCarPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };

  useEffect(() => {
    if (carPosition.x === 100) {
      window.location.assign('https://nitroguy10.github.io/Rev-Your-Engines/');
    }
  }, [carPosition.x]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <main
      className={`${archivo.className}`}
    >
      <div className="bg-light-theme-yellow bg-gradient-to-t from-[rgb(255,22,22,0.5)] to-light-theme-yellow dark:bg-dark-purple dark:from-transparent dark:to-transparent dark:text-black">
        {/* Navbar */}
        <Navbar />
        {/* Small Navbar */}
        <div className={`lg:hidden my-0 w-full bg-light-theme-yellow dark:bg-dark-purple`}>
          <SmallNavbar />
        </div>
        {/* Mobile and tablet landing section */}
        <div className="lg:hidden relative flex flex-col h-auto mt-6 lg:h-screen w-full lg:flex-row px-8 items-center justify-between pt-6 pb-6 lg:pb-0 lg:pt-0 bg-light-mountain-stars dark:bg-mountain-stars-small bg-cover">
          <motion.div className="flex flex-col items-center w-full gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
            <div className="flex flex-col items-center w-full gap-2 text-shadow-light-theme-pink-glow dark:text-shadow-sm-pale-yellow-glow text-light-theme-pink dark:text-pale-yellow font-bold text-xl">
              <h1>
                September 9-10, 2023
              </h1>
              <h1>
                Texas A&M University
              </h1>
            </div>
            <div className="flex flex-row w-full justify-center items-center gap-3 font-extrabold text-sm">
              <Link href="#" className="py-2 w-32 text-center rounded-lg border-2 bg-light-theme-pink border-light-theme-pink text-light-theme-yellow hover:shadow-light-theme-pink-glow dark:bg-pale-yellow dark:border-pale-yellow dark:text-dark-purple dark:hover:shadow-pale-yellow-glow">
                APPLY
              </Link>
              <Link href="#" className="py-2 w-32 text-center bg-transparent rounded-lg border-2 border-light-theme-pink text-light-theme-pink hover:shadow-light-theme-pink-glow dark:border-pale-yellow dark:text-pale-yellow dark:hover:shadow-pale-yellow-glow">
                MENTOR
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <Image src="/assets/diner-sign.png" width={400} height={300} alt="diner-sign" className="-mb-5 glow" priority />
          </motion.div>
          <div className="absolute h-3 bg-turquoise w-full bottom-0 z-20" />
        </div>
        {/* Desktop landing section */}
        <div className="lg:flex relative hidden flex-col h-auto mt-6 w-full px-8 items-center justify-center pt-6 pb-6 lg:pb-0 lg:pt-0 dark:bg-mountain-stars bg-light-mountain-stars bg-cover">
          <div className="flex flex-row justify-center items-center w-full -mb-12 pt-16 -mr-12">
            <div className="w-1/3" />
            <motion.div className="flex flex-col items-center gap-5 xl:gap-8 w-2/3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
              <div className="flex flex-col items-center gap-3 font-bold text-xl xl:text-2xl text-shadow-light-theme-pink-glow dark:text-shadow-sm-pale-yellow-glow text-light-theme-pink dark:text-pale-yellow">
                <h1>
                  September 9-10, 2023
                </h1>
                <h1>
                  Texas A&M University
                </h1>
              </div>
              <div className="flex flex-row justify-center items-center gap-6 font-extrabold text-sm xl:text-base z-40">
                <Link href="#" className="py-2 w-52 text-center rounded-lg border-3 transition duration-200 bg-light-theme-pink border-light-theme-pink text-light-theme-yellow hover:shadow-light-theme-pink-glow dark:bg-pale-yellow dark:border-pale-yellow dark:text-dark-purple dark:hover:shadow-pale-yellow-glow">
                  APPLY
                </Link>
                <Link href="#" className="py-2 w-52 text-center bg-transparent rounded-lg border-3 transition duration-200 border-light-theme-pink text-light-theme-pink hover:shadow-light-theme-pink-glow dark:border-pale-yellow dark:text-pale-yellow dark:hover:shadow-pale-yellow-glow">
                  MENTOR
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-row relative items-end justify-center w-full" >
            <motion.div className="flex items-center justify-center -mr-12 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              <Image src="/assets/diner-sign.png" width={740} height={200} alt="diner" className="z-10 glow" priority />
            </motion.div>
            <motion.div className="flex flex-col justify-stretch z-40 -mx-20 cursor-ew-resize" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ duration: 1, delay: 2 }}>
              <Draggable axis="x" bounds={{ left: 0, top: 0, right: 100, bottom: 0 }} onDrag={handleDrag}>
                <Image src="/assets/car.png" width={350} height={100} alt="car" draggable="false" priority />
              </Draggable>
            </motion.div>
            <motion.div className="flex items-center justify-center -mb-2 min-[1120px]:-mb-4 min-[1500px]:-mb-5 -ml-8 mr-12 z-30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
              <Image src="/assets/diner.png" width={1100} height={200} alt="diner" className="z-30 glow" priority />
            </motion.div>
          </div>
          <div className="absolute h-5 2xl:h-8 bg-light-blue w-full bottom-5 2xl:bottom-8" />
          <div className="absolute h-5 2xl:h-8 bg-turquoise w-full bottom-0 z-20" />
        </div>
        <InfoSection />
        <FaqSection />
        <div className="w-full bg-waves bg-cover h-[283px] bg-paler-yellow" />
        {/* Schedule section */}
        <div id="schedule" className="flex flex-col items-center bg-schedule-blue w-full px-4 pt-4 lg:pt-0 pb-16 gap-8 lg:gap-16">
          <Image src="/assets/schedule-title.png" width={500} height={200} alt="schedule-title" className="lg:hidden" />
          <Image src="/assets/schedule-title-big.png" width={700} height={200} alt="schedule-title" className="hidden lg:flex" />
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-center max-[1206px]:w-full w-[1206px]">
            <Receipt day="SATURDAY" scheduleItems={saturdayScheduleItems} />
            <Receipt day="SUNDAY" scheduleItems={sundayScheduleItems} />
            <AnchorLink href="#resources" className="hidden lg:flex" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {isRevHovered ? (
                <Image src="/assets/retro-rev-click.png" width={300} height={200} alt="retro-rev-click" className="lg:flex lg:absolute lg:bottom-16 lg:right-40 xl:right-48" />
              ) : (
                <Image src="/assets/retro-rev.png" width={300} height={200} alt="retro-rev" className="lg:flex lg:absolute lg:bottom-16 lg:right-40 xl:right-48" />
              )}
            </AnchorLink>
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
          <div className="bg-tiles bg-cover w-full h-24 xl:h-[147px] flex flex-col opacity-50" />
          <div className="absolute w-full bg-gradient-to-b from-white from-10% to-transparent h-24 xl:h-[73px]" />
        </div>
        <div className="relative w-full bg-cover h-24 xl:h-[147px] bg-resources-pink flex flex-col justify-between">
          <div className="bg-tiles bg-cover w-full h-24 xl:h-[147px] flex flex-col opacity-50" />
          <div className="absolute w-full bottom-0 bg-gradient-to-t from-pale-pink from-10% to-transparent h-12 xl:h-[73px]" />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </main >
  )
};
