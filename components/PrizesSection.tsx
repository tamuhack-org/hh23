import { prizes } from '@/data/constants';
import Image from 'next/image';
import Link from 'next/link';

const PrizesSection = () => {
  return (
    <div id="prizes" className="flex flex-col items-center justify-center bg-prizes-gray w-full px-4 py-8 lg:py-16 lg:px-8">
      <div className="flex flex-col items-center justify-center max-[593px]:w-full w-[593px] lg:w-[1000px] xl:w-[1280px] rounded-2xl lg:rounded-3xl border-prizes-light-gray border-4 lg:border-8 p-4 sm:p-10 gap-6">
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          <Image src="/assets/prizes-star.svg" width={75} height={100} alt="prizes-star" />
          <Image src="/assets/prizes-star.svg" width={75} height={100} alt="prizes-star" />
        </div>
        <Image src="/assets/prizes-title-big.png" width={800} height={200} alt="prizes-title" className="mt-0 lg:-mt-8" />
        {/* Mobile and tablet */}
        <div className="flex flex-col w-full items-center justify-center gap-6 lg:hidden">
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
        {/* Desktop */}
        <div className="hidden lg:flex flex-col w-full justify-center items-center gap-6">
          <div className="flex flex-row justify-center items-center w-full gap-8 mt-8">
            <Image src="/assets/mint-green-arrow.svg" width={50} height={50} alt="mint-green-arrow" className="scale-[-1]" />
            <div className="flex flex-row justify-start items-center w-full rounded-3xl border-mint-green border-4 bg-white p-5 gap-6">
              <Image src="/assets/mint-green-circle.svg" width={48} height={12} alt="mint-green-circle" />
              <div className="flex flex-col w-full gap-2">
                <h1 className="font-bold text-xl">{prizes[0].title}</h1>
                <p className="text-base">{prizes[0].description}</p>
                <h2 className="font-bold text-base">{prizes[0].prize}</h2>
              </div>
            </div>
            <Image src="/assets/mint-green-arrow.svg" width={50} height={50} alt="lime-green-arrow" />
          </div>
          <div className="flex flex-row w-full items-stretch justify-center gap-6">
            <div className="flex flex-col w-1/2 rounded-3xl border-mint-green border-4 bg-white p-5">
              <div className="flex flex-col w-full gap-2">
                <h1 className="font-bold text-xl">{prizes[1].title}</h1>
                <p className="text-base">{prizes[1].description}</p>
                <h2 className="font-bold text-base">{prizes[1].prize}</h2>
              </div>
            </div>
            <div className="flex flex-col w-1/2 rounded-3xl border-mint-green border-4 bg-white p-5">
              <div className="flex flex-col w-full gap-2">
                <h1 className="font-bold text-xl">{prizes[2].title}</h1>
                <p className="text-base">{prizes[2].description}</p>
                <h2 className="font-bold text-base">{prizes[2].prize}</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 w-full">
            {prizes.filter((_, i) => i >= 3).map((prize, i) =>
              <div className="flex flex-row justify-center items-center w-full gap-4" key={i}>
                <div className="flex flex-col rounded-3xl w-full bg-white border-4 border-mint-green p-5 gap-2">
                  <h1 className="font-bold text-xl">{prize.title}</h1>
                  <p className="text-base">{prize.description}</p>
                  <h2 className="font-bold text-base">{prize.prize}</h2>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row justify-between items-center w-full gap-6 mt-4">
            <div className="bg-prizes-light-gray w-1/2 h-12 rounded-3xl" />
            <div className="flex flex-row justify-end items-center w-1/2 gap-8">
              <Image src="/assets/light-gray-circle.svg" width={48} height={20} alt="mint-green-circle" />
              <Image src="/assets/light-gray-circle.svg" width={48} height={20} alt="mint-green-circle" />
              <Link href="#">
                <Image src="/assets/hacker-queue.png" width={140} height={20} alt="hacker-queue" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesSection;