import { resources } from '@/data/constants';
import Image from 'next/image';
import ResourceItem from './ResourceItem';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const ResourcesSection = () => {
  return (
    <div id="resources" className="flex flex-col w-full justify-center items-center bg-white px-4 py-8 lg:p-24 gap-6 lg:gap-10">
      <div className="flex flex-row justify-center items-center max-[1184px]:w-full w-[1184px]">
        <div className="hidden w-1/5 justify-end sm:flex">
          <Image src="/assets/resources-stars.png" width={120} height={100} alt="resources-stars" />
        </div>
        <div className="flex w-full justify-center">
          <Image src="/assets/resources-title.svg" width={500} height={200} alt="resources-title" className="w-full" />
        </div>
        <div className="hidden w-1/5 sm:flex">
          <Image src="/assets/resources-stars.png" width={120} height={100} alt="resources-stars" />
        </div>
      </div>
      <div className={`${inter.className} flex flex-col w-full sm:w-[500px] lg:w-[1000px] gap-4 lg:gap-6 lg:mt-6`}>
        <p className="text-xs lg:text-lg md:text-sm text-center">Attending your first few hackathons can be hard, so congratulations for making it here! At TAMUhack, our goal is to make these events accessible to everyone, especially beginners. So, if you&apos;re feeling stuck, don&apos;t give up. <span className="font-bold text-resources-pink">Check out our resources below, and feel free to ask our organizers and mentors for help!</span></p>
        <p className="text-[10px] lg:text-sm text-center italic">*Links will be accessible the day of the event</p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 w-full sm:w-[500px] lg:w-[1000px] lg:mt-8">
        {resources.map((resource, i) => <ResourceItem name={resource.name} link={resource.link} description={resource.description} key={i} />)}
      </div>
      <Image src="/assets/retro-rev.png" width={200} height={200} alt="retro-rev" className="px-4 lg:hidden" />
    </div>
  );
};

export default ResourcesSection;