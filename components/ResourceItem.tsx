import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ResourceItemProps {
  name: string;
  link: string;
  description: string;
}

const ResourceItem = ({ name, link, description }: ResourceItemProps) => {
  return (
    <div className="flex flex-row w-full border-3 justify-start items-center border-resources-pink rounded-xl p-2 lg:p-4">
      <div className="flex flex-row justify-start items-center w-1/2 gap-3">
        <Image src="/assets/resources-star.svg" width={25} height={25} alt="resources-star" />
        <Link href={link} target="_blank" rel="noopener" className="font-bold underline text-resources-pink text-xl">
          {name}
        </Link>
      </div>
      <p className="text-xs lg:text-base w-1/2">
        {description}
      </p>
    </div>
  );
};

export default ResourceItem;