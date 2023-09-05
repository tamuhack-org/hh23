import React, { useState } from 'react';
import Image from 'next/image';
import { Space_Mono, Archivo } from 'next/font/google';
import { motion } from 'framer-motion';
import { ScheduleItem } from '@/pages';
import Link from 'next/link';
import { LiaInfoCircleSolid } from 'react-icons/lia';
import { Tooltip } from '@chakra-ui/react';

const archivo = Archivo({ subsets: ['latin'] });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

interface ReceiptProps {
  day: string;
  scheduleItems: ScheduleItem[];
}

const Receipt = ({ day, scheduleItems }: ReceiptProps) => {
  const [isRevHovered, setIsRevHovered] = useState(false);
  const onMouseEnter = () => setIsRevHovered(true);
  const onMouseLeave = () => setIsRevHovered(false);

  return (
    <motion.div className="flex flex-col w-full items-center gap-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
      <motion.div className={`${spaceMono.className} relative flex flex-col items-center justify-center bg-receipt bg-cover max-[571px]:w-full max-[1200px]:w-[480px] w-[550px] overflow-clip p-8 lg:p-10 gap-4 my-4 lg:my-0 lg:mx-4`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
        {/* COMMENT OUT WHEN SCHEDULE IS FINALIZED */}
        {/* <label className="absolute">Schedule Coming Soon!</label> */}
        <h1 className={`${archivo.className} font-bold text-3xl mb-2 lg:mb-4`}>{day}</h1>
        <div className="w-4/5 border-y-2 border-black h-6 mb-6 lg:mb-4" />
        <div className="flex flex-row justify-between items-center text-xs lg:text-sm font-bold w-full text-left gap-2 lg:gap-4 select-none">
          <h2 className="w-[30%] lg:w-[20%]">
            TIME
          </h2>
          <h2 className="w-[70%] lg:w-[80%]">
            EVENT
          </h2>
        </div>
        {scheduleItems.sort((item1, item2) => new Date(item1.date).getTime() - new Date(item2.date).getTime()).map((scheduleItem, i) =>
          <div className="flex flex-row justify-between items-start border-b border-black border-opacity-40 text-xs lg:text-sm w-full text-left py-2 gap-2 lg:gap-4 uppercase hover:border-opacity-100 transition duration-200 select-none" key={i}>
            <p className="w-[30%] lg:w-[20%]">
              {new Date(scheduleItem.date).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            </p>
            {scheduleItem.description.length > 0 ?
              // <div className="flex flex-col gap-1 w-[70%] lg:w-[80%]">
              //   <p>
              //     {scheduleItem.event_name}
              //   </p>
              //   <p className="text-xs">
              //     {scheduleItem.description}
              //   </p>
              // </div>
              <div className="flex flex-row justify-between gap-2 lg:gap-0 w-[70%] lg:w-[80%]">
                <p>{scheduleItem.event_name}</p>
                <Tooltip label={scheduleItem.description}>
                  <span>
                    <LiaInfoCircleSolid size={20} />
                  </span>
                </Tooltip>
              </div>
              :
              <p className="w-[70%] lg:w-[80%]">
                {scheduleItem.event_name}
              </p>
            }
          </div>
        )}
        <Image src="/assets/barcode.png" width={177} height={69} alt="barcode" className="py-2 lg:py-8" />
      </motion.div>
      {day === 'SUNDAY' &&
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>
          <Link href="#resources" scroll={false} className="hidden lg:flex" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {isRevHovered ? (
              <Image src="/assets/retro-rev-click.png" width={300} height={200} alt="retro-rev-click" className="" priority />
            ) : (
              <Image src="/assets/retro-rev.png" width={300} height={200} alt="retro-rev" className="" />
            )}
          </Link>
        </motion.div>
      }
    </motion.div>
  );
};

export default Receipt