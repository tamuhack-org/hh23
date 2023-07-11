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
    <div className={`${spaceMono.className} flex flex-col items-center justify-center bg-receipt bg-cover max-[571px]:w-full w-[571px] overflow-clip p-6 gap-4`}>
      <h1 className={`${poppins.className} font-bold text-xl`}>{day}</h1>
      <div className="w-4/5 border-y-2 border-black h-6 mb-4" />
      <div className="flex flex-row justify-between items-center text-xs font-bold w-full text-left">
        <h2 className="w-[30%]">
          TIME
        </h2>
        <h2 className="w-[30%]">
          ROOM
        </h2>
        <h2 className="w-[40%]">
          EVENT
        </h2>
      </div>
      {scheduleItems.map((scheduleItem, i) =>
        <div className="flex flex-row justify-between items-center border-b border-black text-xs w-full text-left py-2" key={i}>
          <p className="w-[30%]">
            {scheduleItem.time}
          </p>
          <p className="w-[30%]">
            {scheduleItem.room}
          </p>
          <p className="w-[40%]">
            {scheduleItem.event}
          </p>
        </div>
      )}
      <Image src="/assets/barcode.png" width={177} height={69} alt="barcode" className="py-2" />
    </div>
  );
};

export default Receipt