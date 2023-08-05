import React from 'react';
import Image from 'next/image';
import { Space_Mono, Archivo } from 'next/font/google';
import { motion } from 'framer-motion';

const archivo = Archivo({ subsets: ['latin'] });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] });

interface ReceiptProps {
  day: string;
  scheduleItems: {
    time: string;
    room: string;
    event: string;
  }[];
}

const Receipt = ({ day, scheduleItems }: ReceiptProps) => {
  return (
    <motion.div className={`${spaceMono.className} relative flex flex-col items-center justify-center bg-receipt bg-cover max-[571px]:w-full w-[550px] overflow-clip p-8 lg:p-10 gap-4 my-4 lg:my-0 lg:mx-4`} initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
      {/* COMMENT OUT WHEN SCHEDULE IS FINALIZED */}
      <label className="absolute">Schedule Coming Soon!</label>
      <h1 className={`${archivo.className} font-bold text-3xl mb-2 lg:mb-4`}>{day}</h1>
      <div className="w-4/5 border-y-2 border-black h-6 mb-6 lg:mb-4" />
      <div className="flex flex-row justify-between items-center text-xs lg:text-sm font-bold w-full text-left gap-2 lg:gap-4 opacity-0 select-none">
        <h2 className="w-[30%] lg:w-[20%]">
          TIME
        </h2>
        <h2 className="w-[30%] lg:w-[20%]">
          ROOM
        </h2>
        <h2 className="w-[40%] lg:w-[60%]">
          EVENT
        </h2>
      </div>
      {scheduleItems.map((scheduleItem, i) =>
        <div className="flex flex-row justify-between items-start border-b border-black border-opacity-40 text-xs lg:text-sm w-full text-left py-2 gap-2 lg:gap-4 uppercase hover:border-opacity-100 transition duration-200 opacity-0 select-none" key={i}>
          <p className="w-[30%] lg:w-[20%]">
            {scheduleItem.time}
          </p>
          <p className="w-[30%] lg:w-[20%]">
            {scheduleItem.room}
          </p>
          <p className="w-[40%] lg:w-[60%]">
            {scheduleItem.event}
          </p>
        </div>
      )}
      <Image src="/assets/barcode.png" width={177} height={69} alt="barcode" className="py-2 lg:py-8" />
    </motion.div>
  );
};

export default Receipt