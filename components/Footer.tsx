import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaTiktok, FaLinkedin, FaDiscord } from 'react-icons/fa6';

const poppins = Poppins({ weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900'], subsets: ['latin'] });

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full border-t-3 border-lighter-blue bg-dark-purple px-4 lg:px-8 py-6 gap-8">
      <div className="flex flex-row justify-between items-start w-full gap-6 sm:w-[500px] lg:w-[1000px]">
        <div className="flex flex-col item-start justify-center text-white gap-2">
          <h1 className="font-bold text-sm lg:text-xl">Sign up for our newsletter!</h1>
          <p className={`${poppins.className} text-xs lg:text-sm`}>Stay connected! Sign up for our mailing list for events, updates, and more.</p>
        </div>
        <form
          action="https://tamuhack.us9.list-manage.com/subscribe/post?u=ba74e26a78411ab40af6384c5&amp;id=2f4969eb6d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="flex flex-col lg:flex-row items-end lg:items-stretch justify-start gap-2"
        >
          <label htmlFor="mce-EMAIL" className="hidden">Email Address</label>
          <input
            type="text"
            name="EMAIL"
            className="rounded-lg text-xs lg:text-sm p-1 lg:px-2 bg-[rgba(217,217,217,0.09)] border border-white text-white"
            id="mce-EMAIL"
            readOnly
          />
          <button className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-resources-pink py-1 px-2 text-xs lg:text-base text-white font-bold rounded-lg"
            />
          </button>
          <div aria-hidden="true" className="absolute -left-[5000px]">
            <input
              type="text"
              name="b_43a795784ca963e25903a0da6_9937fe4fc5"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
        </form>
      </div>
      <div className="flex flex-row items-center justify-between text-white w-full sm:w-[500px] lg:w-[1000px]">
        <h1 className="font-bold text-sm lg:text-xl">HowdyHack 2023</h1>
        <div className="lg:hidden flex flex-row items-center justify-center text-xs gap-2">
          <Link href="https://www.instagram.com/tamuhack" target="_blank" rel="noopener"><FaInstagram size={20} /></Link>
          <Link href="https://www.tiktok.com/@tamuhack" target="_blank" rel="noopener"><FaTiktok size={18} /></Link>
          <Link href="https://www.linkedin.com/company/tamuhack" target="_blank" rel="noopener"><FaLinkedin size={20} /></Link>
          <Link href="https://discord.gg/jSTPpy4F" target="_blank" rel="noopener"><FaDiscord size={20} /></Link>
        </div>
      </div>
      <div className={`hidden ${poppins.className} lg:flex flex-row items-center justify-between w-full sm:w-[500px] lg:w-[1000px] -mt-5 text-white`}>
        <p className="text-sm italic">Website brought to you by the TAMUhack Creative + Technology Teams</p>
        <div className="hidden lg:flex flex-row items-center justify-center text-xs gap-2">
          <Link href="https://www.instagram.com/tamuhack" target="_blank" rel="noopener"><FaInstagram size={20} /></Link>
          <Link href="https://www.tiktok.com/@tamuhack" target="_blank" rel="noopener"><FaTiktok size={18} /></Link>
          <Link href="https://www.linkedin.com/company/tamuhack" target="_blank" rel="noopener"><FaLinkedin size={20} /></Link>
          <Link href="https://discord.gg/jSTPpy4F" target="_blank" rel="noopener"><FaDiscord size={20} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;