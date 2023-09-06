import { resources, socials, workshops } from '@/data/constants';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between items-center px-8 lg:px-16 pt-8 lg:pt-16 text-light-theme-pink dark:text-pale-yellow bg-light-theme-yellow dark:bg-dark-purple border-t-8 border-light-blue dark:border-lighter-blue">
        <div className="lg:text-start text-center">
          <p className="mb-0 text-2xl font-bold">Sign up to our newsletter</p>
          <p className="font-poppins navy">Stay connected! Sign up for our mailing list for events, updates, and more.</p>
        </div>
        <form
          action="https://tamuhack.us9.list-manage.com/subscribe/post?u=ba74e26a78411ab40af6384c5&amp;id=2f4969eb6d"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          className="flex flex-col lg:flex-row items-center lg:items-stretch justify-start gap-2"
        >
          <div className="w-full lg:flex-none flex flex-row max-[320px]:flex-col max-[320px]:justify-stretch justify-center items-stretch gap-3 lg:gap-5 py-4">
            <label htmlFor="mce-EMAIL" className="hidden">Email Address</label>
            <input
              type="text"
              name="EMAIL"
              placeholder="Enter your email address"
              className="2xl:w-96 w-64 px-4 py-2 rounded-lg bg-[rgba(217,217,217,0.09)] border border-black dark:border-white placeholder:text-[rgb(255,57,119,0.6)] dark:placeholder:text-[rgb(255,204,103,0.6)]"
              id="mce-EMAIL"
            />
            <button className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="h-full px-4 py-2 rounded-lg bg-resources-pink dark:bg-pale-yellow transition-shadow duration-200 border border-resources-pink dark:border-pale-yellow text-base text-light-theme-yellow dark:text-dark-purple font-bold hover:shadow-light-theme-pink-glow dark:hover:shadow-pale-yellow-glow cursor-pointer"
              />
            </button>
          </div>
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
      <div className="lg:flex justify-between px-8 lg:px-16 py-8 lg:py-16 text-light-theme-pink dark:text-pale-yellow bg-light-theme-yellow dark:bg-dark-purple">
        <div className="lg:w-1/5">
          <p className="font-black text-3xl mb-8">HowdyHack 2023</p>
          <p className="font-medium text-xl mb-8">Website brought to you by the TAMUhack Creative + Technology Teams</p>
        </div>
        <div className="flex flex-wrap justify-start lg:justify-end flex-grow gap-12">
          {/* UNCOMMENT WHEN EVENT STARTS */}
          <div>
            <p className="text-base mb-2">Hacker Resources</p>
            <div className="flex flex-col gap-1 mb-2">
              {resources.map((resource) =>
                <Link href={resource.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow transition-text-shadow duration-200" key={resource.name}>
                  {resource.name}
                </Link>)}
            </div>
          </div>
          {/* COMMENT WHEN EVENT STARTS */}
          {/* <div className="opacity-50 cursor-not-allowed select-none">
            <p className="text-base mb-2 cursor-not-allowed">Hacker Resources</p>
            <div className="flex flex-col gap-1 mb-2">
              {resources.map((resource) =>
                <label className="font-semibold text-lg cursor-not-allowed" key={resource.name}>
                  {resource.name}
                </label>)}
            </div>
          </div> */}
          <div>
            <p className="text-base mb-2">Socials</p>
            <div className="flex flex-col gap-1 mb-2">
              {socials.map(social =>
                <Link href={social.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow transition-text-shadow duration-200" key={social.name}>
                  {social.name}
                </Link>)}
            </div>
          </div>
          <div>
            <p className="text-base mb-2">Workshops</p>
            <div className="flex flex-col gap-1 mb-2">
              {workshops.map(workshop =>
                <Link href={workshop.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-lg hover:text-shadow-light-theme-pink-glow dark:hover:text-shadow-pale-yellow-glow transition-text-shadow duration-200" key={workshop.name}>
                  {workshop.name}
                </Link>)}
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="flex flex-col items-center justify-center w-full border-t-3 border-light-blue px-4 lg:px-8 py-6 gap-8 bg-light-theme-yellow text-black dark:bg-dark-purple dark:text-white dark:border-lighter-blue">
    //   <div className="flex flex-row justify-between items-start w-full gap-6 sm:w-[500px] lg:w-[1000px] xl:w-[1280px]">
    //     <div className="flex flex-col item-start justify-center  gap-2">
    //       <h1 className="font-bold text-sm lg:text-xl">Sign up for our newsletter!</h1>
    //       <p className="text-xs">Stay connected! Sign up for our mailing list for events, updates, and more.</p>
    //     </div>
    //     <form
    //       action="https://tamuhack.us9.list-manage.com/subscribe/post?u=ba74e26a78411ab40af6384c5&amp;id=2f4969eb6d"
    //       method="post"
    //       id="mc-embedded-subscribe-form"
    //       name="mc-embedded-subscribe-form"
    //       target="_blank"
    //       noValidate
    //       className="flex flex-col lg:flex-row items-end lg:items-stretch justify-start gap-2"
    //     >
    //       <label htmlFor="mce-EMAIL" className="hidden">Email Address</label>
    //       <input
    //         type="text"
    //         name="EMAIL"
    //         className="rounded-lg text-xs lg:text-sm p-1 lg:px-2 bg-[rgba(217,217,217,0.09)] border border-black dark:border-white"
    //         id="mce-EMAIL"
    //         readOnly
    //       />
    //       <button className="clear">
    //         <input
    //           type="submit"
    //           value="Subscribe"
    //           name="subscribe"
    //           id="mc-embedded-subscribe"
    //           className="bg-resources-pink py-1 px-2 text-xs lg:text-base text-white font-bold rounded-lg"
    //         />
    //       </button>
    //       <div aria-hidden="true" className="absolute -left-[5000px]">
    //         <input
    //           type="text"
    //           name="b_43a795784ca963e25903a0da6_9937fe4fc5"
    //           tabIndex={-1}
    //           defaultValue=""
    //         />
    //       </div>
    //     </form>
    //   </div>
    //   <div className="flex flex-row items-center justify-between  w-full sm:w-[500px] lg:w-[1000px] xl:w-[1280px]">
    //     <h1 className="font-bold text-sm lg:text-xl">HowdyHack 2023</h1>
    //     <div className="lg:hidden flex flex-row items-center justify-center text-xs gap-2">
    //       <Link href="https://www.instagram.com/tamuhack" target="_blank" rel="noopener"><FaInstagram size={20} /></Link>
    //       <Link href="https://www.tiktok.com/@tamuhack" target="_blank" rel="noopener"><FaTiktok size={18} /></Link>
    //       <Link href="https://www.linkedin.com/company/tamuhack" target="_blank" rel="noopener"><FaLinkedin size={20} /></Link>
    //       <Link href="https://discord.gg/jSTPpy4F" target="_blank" rel="noopener"><FaDiscord size={20} /></Link>
    //     </div>
    //   </div>
    //   <div className="hidden lg:flex flex-row items-center justify-between w-full sm:w-[500px] lg:w-[1000px] xl:w-[1280px] -mt-6">
    //     <p className="text-sm italic">Website brought to you by the TAMUhack Creative + Technology Teams</p>
    //     <div className="hidden lg:flex flex-row items-center justify-center text-xs gap-2">
    //       <Link href="https://www.instagram.com/tamuhack" target="_blank" rel="noopener"><FaInstagram size={20} /></Link>
    //       <Link href="https://www.tiktok.com/@tamuhack" target="_blank" rel="noopener"><FaTiktok size={18} /></Link>
    //       <Link href="https://www.linkedin.com/company/tamuhack" target="_blank" rel="noopener"><FaLinkedin size={20} /></Link>
    //       <Link href="https://discord.gg/jSTPpy4F" target="_blank" rel="noopener"><FaDiscord size={20} /></Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;