import { prizes } from '@/data/constants';
import Image from 'next/image';
import Link from 'next/link';


const PrizesSection = () => {
  return (
    <div id="prizes" className="flex flex-col items-center justify-center bg-prizes-gray w-full px-4 py-8">
      <div className="flex flex-col items-center justify-center max-[593px]:w-full w-[593px] rounded-2xl border-prizes-light-gray border-4 p-4 sm:p-10 gap-6">
        <Image src="/assets/prizes-title.png" width={500} height={200} alt="prizes-title" />
        <div className="flex flex-col w-full items-center justify-center gap-6">
          {prizes.map((prize, i) =>
            <div className="flex flex-row justify-center items-center w-full gap-4" key={i}>
              <Image src="/assets/mint-green-circle.svg" width={12} height={12} alt="mint-green-circle" />
              <div className="flex flex-col rounded-3xl w-full bg-white border-4 border-mint-green p-3 gap-1">
                <h1 className="font-bold text-sm">{prize.title}</h1>
                <p className="text-xs">{prize.description}</p>
                <h2 className="font-bold text-xs">{prize.prize}</h2>
              </div>
              <Image src="/assets/mint-green-circle.svg" width={12} height={12} alt="mint-green-circle" />
            </div>
          )}
          <div className="flex flex-row justify-between items-center w-full gap-6 mt-4">
            <div className="bg-prizes-light-gray w-1/2 h-12 rounded-3xl" />
            <div className="flex flex-row justify-end items-center w-1/2 gap-2">
              <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
              <Image src="/assets/light-gray-circle.svg" width={20} height={20} alt="mint-green-circle" />
              <Link href="#">
                <Image src="/assets/hacker-queue.png" width={100} height={20} alt="hacker-queue" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;