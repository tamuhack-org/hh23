import Image from 'next/image';
import { faqMenuItems } from '@/data/constants';
import FaqMenuItem from './FaqMenuItem';

const FaqSection = () => {
  return (
    <div id="faq" className="flex flex-col items-center justify-center bg-paler-yellow pt-12">
      <div className="relative w-full h-4 bg-white -top-10 mb-2" />
      <div className="relative flex flex-col items-center justify-center min-[500px]:w-[500px] lg:w-[1000px]">
        <Image src="/assets/menu-title.png" width={371} height={100} alt="menu-title" className="absolute w-2/3 -top-6 z-10" />
        {/* Top menu border */}
        <div className="relative flex flex-col w-full bg-black border-white border-dashed border-b-16 pt-3 rounded-t-xl">
          <div className="absolute w-[40px] bg-black h-[40px] -mt-3 rounded-tl-xl" />
          <div className="absolute right-0 w-[40px] bg-black h-[40px] -mt-3 rounded-tr-xl" />
        </div>
        {/* FAQ Content with side borders */}
        <div className="flex flex-col w-full bg-black px-3 py-3">
          <div className="flex flex-col w-full bg-black border-white border-dashed border-x-16 px-3">
            <div className="flex flex-col w-full bg-white px-6 py-6 gap-4">
              <div className="w-full h-10 min-[360px]:h-14 min-[400px]:h-[90px] min-[500px]:h-24" />
              {faqMenuItems.map((faqMenuItem, i) =>
                <FaqMenuItem question={faqMenuItem.question} answer={faqMenuItem.answer} key={i} />
              )}
              <div className="flex flex-row items-center w-full justify-center pt-4">
                <Image src="/assets/pie.png" width={75} height={100} alt="pie" />
                <Image src="/assets/pie.png" width={75} height={100} alt="pie" />
                <Image src="/assets/pie.png" width={75} height={100} alt="pie" />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom menu border */}
        <div className="relative flex flex-col w-full bg-black border-white border-dashed border-t-16 pb-3 rounded-b-xl">
          <div className="absolute bottom-0 w-[40px] bg-black h-[40px] rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-[40px] bg-black h-[40px] rounded-br-xl" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;