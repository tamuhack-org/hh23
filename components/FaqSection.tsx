import Image from 'next/image';
import { faqMenuItems } from '@/data/constants';
import FaqMenuItem from './FaqMenuItem';
import { Archivo_Narrow } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';

const archivoNarrow = Archivo_Narrow({ subsets: ['latin'] });

const FaqSection = () => {
  return (
    <div id="faq" className="flex flex-col items-center justify-center bg-paler-yellow pt-12 lg:pb-16 lg:pt-24">
      <div className="relative w-full h-4 bg-white -top-10 mb-2 lg:-top-20" />
      <motion.div className="relative flex flex-col items-center justify-center min-[500px]:w-[500px] lg:w-[1000px] xl:w-[1280px] xl:px-16" initial={{ opacity: 0  }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
        <Image src="/assets/menu-title-small.png" width={371} height={100} alt="menu-title-small" className="absolute w-2/3 -top-6 z-10 lg:hidden" />
        <Image src="/assets/menu-title-big.png" width={371} height={100} alt="menu-title" className="hidden absolute w-1/3 top-24 z-10 lg:flex" />
        {/* Top menu border */}
        <div className="relative flex flex-col w-full bg-black border-white border-dashed border-b-16 pt-3 rounded-t-xl lg:border-b-32 lg:pt-4">
          <div className="absolute w-[40px] lg:w-[64px] bg-black h-[40px] lg:h-[64px] -mt-3 lg:-mt-4 rounded-tl-xl" />
          <div className="absolute right-0 w-[40px] lg:w-[64px] bg-black h-[40px] lg:h-[64px] -mt-3 lg:-mt-4 rounded-tr-xl" />
        </div>
        {/* FAQ Content with side borders */}
        <div className="flex flex-col w-full bg-black px-3 py-3 lg:py-4 lg:px-4">
          <div className="flex flex-col w-full bg-black border-white border-dashed border-x-16 lg:border-x-32 px-3 lg:px-4">
            <div className="flex flex-col w-full bg-white px-6 py-6 gap-4 lg:px-24 lg:pb-16">
              {/* Buffer div for menu title */}
              <motion.div className="flex flex-row justify-between items-center w-full h-10 min-[360px]:h-14 min-[400px]:h-[90px] min-[500px]:h-24 min-[1024px]:h-52 xl:h-72" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                <Image src="/assets/sundae.png" width={100} height={50} alt="sundae" className="hidden lg:flex" />
                <div className="hidden lg:flex flex-col items-center justify-center gap-6">
                  <Image src="/assets/pie.png" width={110} height={100} alt="pie" />
                  <Image src="/assets/burger.png" width={90} height={100} alt="burger" />
                </div>
              </motion.div>
              {faqMenuItems.map((faqMenuItem, i) =>
                <FaqMenuItem question={faqMenuItem.question} answer={faqMenuItem.answer} key={i} />
              )}
              <div className="flex flex-col justify-center items-start border-b-4 border-dashed border-black w-full gap-2 lg:pb-3 lg:pt-4">
                <div className={`${archivoNarrow.className} flex flex-row justify-between items-center font-semibold text-base lg:text-2xl w-full`}>
                  <h1 className="text-pale-pink">
                    Have additional questions?
                  </h1>
                  <h1 className="text-[rgb(0,0,0,0.4)] lg:text-2xl">
                    $
                  </h1>
                </div>
                <div className="text-xs lg:text-lg pb-2">
                  Email us with any questions, comments, concerns at <Link href="mailto:hello@tamuhack.com" className="underline hover:opacity-75 transition duration-200">hello@tamuhack.com</Link>.
                </div>
              </div>
              <motion.div className="flex flex-row items-center w-full justify-center pt-4 lg:hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }}>
                <Image src="/assets/pie.png" width={75} height={100} alt="pie" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Bottom menu border */}
        <div className="relative flex flex-col w-full bg-black border-white border-dashed border-t-16 lg:border-t-32 pb-3 lg:pb-4 rounded-b-xl">
          <div className="absolute bottom-0 w-[40px] lg:w-[64px] bg-black h-[40px] lg:h-[64px] rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-[40px] lg:w-[64px] bg-black h-[40px] lg:h-[64px] rounded-br-xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default FaqSection;