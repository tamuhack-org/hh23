import React from 'react';
import { Archivo_Narrow } from 'next/font/google';

const archivoNarrow = Archivo_Narrow({ subsets: ['latin'] });

interface FaqMenuItemProps {
  question: string;
  answer: string;
}

const FaqMenuItem = ({ question, answer }: FaqMenuItemProps) => {
  return (
    <div className="flex flex-col justify-center items-start border-b-4 border-dashed border-black w-full gap-2 lg:pb-3 lg:pt-4">
      <div className={`${archivoNarrow.className} flex flex-row justify-between items-center font-semibold text-base lg:text-2xl w-full`}>
        <h1 className="text-pale-pink">
          {question}
        </h1>
        <h1 className="text-[rgb(0,0,0,0.4)] lg:text-2xl">
          $
        </h1>
      </div>
      <div className="text-xs lg:text-lg pb-2">
        {answer}
      </div>
    </div>
  );
};

export default FaqMenuItem;