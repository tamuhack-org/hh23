import Link from 'next/link';
import React from 'react';
import { PiStarFourFill } from 'react-icons/pi';

interface ResourceItemProps {
  name: string;
  link: string;
  description: string;
}

const ResourceItem = ({ name, link, description }: ResourceItemProps) => {
  return (
    // UNCOMMENT WHEN EVENT STARTS

    <Link href={link} target="_blank" rel="noopener" className="flex flex-row w-full justify-start items-center bg-resources-pink hover:shadow-resources-pink-glow transition-shadow duration-200 rounded-2xl p-1 lg:p-3">
      <div className="flex flex-col lg:flex-row w-full justify-start items-center rounded-xl border-2 lg:border-4 border-white p-4 lg:p-6 gap-2">
        <div className="flex flex-row justify-between items-center w-full lg:w-1/3 gap-2 lg:gap-4">
          <h1 className="font-black text-white text-base lg:text-2xl rounded-md">
            {name}
          </h1>
          <PiStarFourFill size={30} fill='white' className="hidden lg:flex" />
        </div>
        <p className="text-xs lg:text-lg w-full lg:w-2/3 text-white lg:pl-10">
          {description}
        </p>
      </div>
    </Link>

    // COMMENT WHEN EVENT STARTS

    // <div className="flex flex-row w-full justify-start items-center bg-resources-pink rounded-2xl p-1 lg:p-3 cursor-not-allowed opacity-50 select-none">
    //   <div className="flex flex-col lg:flex-row w-full justify-start items-center rounded-xl border-2 lg:border-4 border-white p-4 lg:p-6 gap-2">
    //     <div className="flex flex-row justify-between items-center w-full lg:w-1/3 gap-2 lg:gap-4">
    //       <h1 className="font-black text-white text-base lg:text-2xl rounded-md">
    //         {name}
    //       </h1>
    //       <PiStarFourFill size={30} fill='white' className="hidden lg:flex" />
    //     </div>
    //     <p className="text-xs lg:text-lg w-full lg:w-2/3 text-white lg:pl-10">
    //       {description}
    //     </p>
    //   </div>
    // </div>
  );
};

export default ResourceItem;