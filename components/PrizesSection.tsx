import { prizes } from '@/data/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Notable } from 'next/font/google';
import { PiVinylRecordFill } from 'react-icons/pi';
import { motion } from 'framer-motion';

const notable = Notable({ weight: '400', subsets: ['latin'] });

const PrizesSection = () => {
  return (
    <div id="prizes" className="flex flex-col items-center justify-center bg-prizes-gray w-full px-4 py-8 lg:py-16 lg:px-8">
      <motion.div className="flex flex-col items-center justify-center max-[593px]:w-full w-[593px] lg:w-[1000px] xl:w-[1280px] rounded-2xl lg:rounded-3xl border-prizes-light-gray border-4 lg:border-8 max-[400px]:p-4 p-6 sm:p-10 gap-6" initial={{ opacity: 0  }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <Image src="/assets/prizes-star.svg" width={75} height={100} alt="prizes-star" />
          <Image src="/assets/prizes-star.svg" width={75} height={100} alt="prizes-star" />
        </div>
        <Image src="/assets/prizes-title-big.png" width={800} height={200} alt="prizes-title" className="mt-0 lg:-mt-8 jukebox-glow" />
        {/* Mobile and tablet */}
        <div className="flex flex-col w-full items-center justify-center gap-6 lg:hidden">
          {prizes.map((prize, i) =>
            <div className="flex flex-row justify-center items-center w-full gap-4" key={i}>
              <PiVinylRecordFill size={20} fill="#92CEAB" className="" />
              <div className="flex flex-col rounded-3xl w-full bg-[#ffffea] border-4 border-mint-green p-3 gap-1 text-prizes-gray hover:shadow-mint-green-glow transition-shadow duration-200 text-center">
                <h1 className={`${notable.className} font-black text-sm mb-1`}>{prize.title}</h1>
                <p className="text-xs text-prizes-light-gray">{prize.description}</p>
                <h2 className="font-bold text-xs mt-2">{prize.prize}</h2>
              </div>
              <PiVinylRecordFill size={20} fill="#92CEAB" className="" />
            </div>
          )}
          
          <div className="flex flex-row justify-end sm:justify-between items-center w-full gap-6 mt-4">
            <div className="bg-prizes-light-gray w-1/2 h-8 rounded-3xl hidden sm:flex" />
            <div className="flex flex-row justify-end items-center w-1/2 gap-2">
              <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
              <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
              <Link href="#">
                <Image src="/assets/hacker-queue.png" width={100} height={20} alt="hacker-queue" />
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex flex-col w-full justify-center items-center gap-10">
          <div className="flex flex-row justify-center items-center w-full gap-8 mt-8">
            <Image src="/assets/mint-green-arrow.svg" width={50} height={50} alt="mint-green-arrow" className="scale-[-1]" />
            <div className="flex flex-row justify-start items-center w-full rounded-3xl border-mint-green border-6 hover:shadow-mint-green-glow transition-shadow duration-200 bg-[#ffffea] p-5 gap-6 text-prizes-gray">
              {/* <Image src="/assets/mint-green-circle.svg" width={48} height={12} alt="mint-green-circle" /> */}
              <PiVinylRecordFill size={50} fill="#92CEAB" className="animate-spin" />
              <div className="flex flex-col w-full gap-2 text-center">
                <h1 className={`${notable.className} font-black text-3xl mb-2`}>{prizes[0].title}</h1>
                <p className="text-lg text-prizes-light-gray">{prizes[0].description}</p>
                <h2 className="font-bold text-lg mt-2">{prizes[0].prize}</h2>
              </div>
              <PiVinylRecordFill size={50} fill="#92CEAB" className="animate-spin" />
            </div>
            <Image src="/assets/mint-green-arrow.svg" width={50} height={50} alt="lime-green-arrow" />
          </div>
          <div className="grid grid-cols-2 gap-10 w-full">
            {prizes.filter((_, i) => i >= 1 && i <= 4).map((prize, i) =>
              <div className="flex flex-row justify-center items-center w-full gap-4" key={i}>
                <div className="flex flex-col rounded-3xl w-full bg-[#ffffea] border-6 hover:shadow-mint-green-glow transition-shadow duration-200 border-mint-green p-5 gap-2 text-prizes-gray text-center">
                  <h1 className={`${notable.className} font-black text-3xl mb-2`}>{prize.title}</h1>
                  <p className="text-lg text-prizes-light-gray">{prize.description}</p>
                  <h2 className="font-bold text-lg mt-2">{prize.prize}</h2>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-between items-center w-full gap-6">
            <div className="flex flex-row justify-center items-center w-1/2 gap-4">
              <div className="flex flex-col rounded-3xl w-full bg-[#f64974] hover:shadow-prizes-pink-glow transition-shadow duration-200 p-2 gap-2 text-prizes-gray">
                <div className="flex flex-col rounded-2xl w-full bg-[#f6ca6d] transition-shadow duration-200 p-2 gap-2 text-prizes-gray">
                  <div className="flex flex-col rounded-xl w-full border-8 transition-shadow duration-200 border-mint-green bg-[#ffffea] p-4 gap-2 text-prizes-gray text-center">
                    <h1 className={`${notable.className} font-black text-3xl mb-2`}>{prizes[5].title}</h1>
                    <p className="text-lg text-prizes-light-gray">{prizes[5].description}</p>
                    <h2 className="font-bold text-lg mt-2">{prizes[5].prize}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center w-1/2 gap-8">
              <Image src="/assets/light-gray-circle.svg" width={48} height={20} alt="mint-green-circle" />
              <Image src="/assets/light-gray-circle.svg" width={48} height={20} alt="mint-green-circle" />
              <Link href="#" className="hover:scale-110 transition duration-200">
                <Image src="/assets/hacker-queue.png" width={170} height={20} alt="hacker-queue" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrizesSection;