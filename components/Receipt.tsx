import React from 'react';
import Image from 'next/image';
import { Space_Mono, Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900'], subsets: ['latin'] });
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
    <div className={`${spaceMono.className} flex flex-col items-center justify-center bg-receipt bg-cover max-[571px]:w-full w-[571px] overflow-clip p-6 lg:p-10 gap-4`}>
      <h1 className={`${poppins.className} font-bold text-xl lg:text-3xl lg:mb-4`}>{day}</h1>
      <div className="w-4/5 border-y-2 border-black h-6 mb-4" />
      <div className="flex flex-row justify-between items-center text-xs lg:text-sm font-bold w-full text-left gap-2 lg:gap-4">
        <h2 className="w-[30%] lg:w-[20%]">
          TIME
        </h2>
        <h2 className="w-[30%] lg:w-[35%]">
          ROOM
        </h2>
        <h2 className="w-[40%] lg:w-[45%]">
          EVENT
        </h2>
      </div>
      {scheduleItems.map((scheduleItem, i) =>
        <div className="flex flex-row justify-between items-center border-b border-black border-opacity-40 text-xs lg:text-sm w-full text-left py-2 gap-2 lg:gap-4 uppercase hover:border-opacity-100 transition duration-200" key={i}>
          <p className="w-[30%] lg:w-[20%]">
            {scheduleItem.time}
          </p>
          <p className="w-[30%] lg:w-[35%]">
            {scheduleItem.room}
          </p>
          <p className="w-[40%] lg:w-[45%]">
            {scheduleItem.event}
          </p>
        </div>
      )}
      <Image src="/assets/barcode.png" width={177} height={69} alt="barcode" className="py-2 lg:py-8" />
    </div>
  );
};

export default Receipt