import Image from 'next/image'
<<<<<<< HEAD
import { Archivo, Zen_Tokyo_Zoo, Inter } from 'next/font/google'
import Link from 'next/link'

const archivo = Archivo({ subsets: ['latin'] })
const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] })
=======
import { Inter } from 'next/font/google'

>>>>>>> parent of 7f2fc4c (navbar, mountain + stars background)
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<<<<<<< HEAD
      <div className="flex flex-col w-full min-h-screen bg-dark-purple">
        <div className="flex flex-row justify-between items-center w-full h-24 px-16 border-b-2 border-b-pale-yellow text-pale-yellow">
          <Image src="assets/hh-logo.svg" height={58} width={58} alt="hh23" />
          <div className="flex flex-row gap-8 font-bold text-lg">
            <Link href="/" >
              Info
            </Link>
            <Link href="/" >
              FAQ
            </Link>
            <Link href="/" >
              Schedule
            </Link>
            <Link href="/" >
              Prizes
            </Link>
            <Link href="/" >
              Resources
            </Link>
          </div>
          <Link href="https://tamuhack.org" target="_blank" rel="noopener">
            <h1 className="text-4xl font-bold">th</h1>
          </Link>
        </div>
        <div className="w-full min-h-screen bg-mountain-stars mt-8 bg-cover border-b-32 border-turquoise">
          <Image src="assets/diner-sign.svg" height={842} width={652} alt="diner-sign" className="bottom-0" />
        </div>
      </div>
      <div className={`flex flex-col border-t-32 border-light-blue min-h-content ${inter.className}`}>
        <div className="flex flex-col justify-start items-center w-full pt-16 gap-12 text-lg px-52">
          <h1 className={`text-6xl text-turquoise ${zenTokyoZoo.className}`}>
            WELCOME IN, AGGIE!
          </h1>
          <p className="text-center">
            HowdyHack is a 24-hour, themed, <b>beginner focused</b> hackathon <b>exclusively for Texas A&M students</b>, designed to showcase TAMU&apos;s diverse range of innovative ideas in a collaborative environment. At the event, you will have the opportunity to create your own software and hardware products with up to <b>4 team members</b> that wow judges and win prizes. Go gig &apos;em!
          </p>
          <div className="flex flex-row justify-between w-full gap-48">
            <div className="flex flex-col w-full gap-4">
              <h2 className="text-turquoise font-bold text-2xl">
                How to Participate
              </h2>
              <p>
                <b>Click the apply button above!</b> Sign up ASAP to secure your spot.
                <br />
                <br />
                After you sign up, you will receive a confirmation email letting you know you are good to go. You can form a team yourself or find one during the team building portion right before the event.
              </p>
              <div className="flex flex-row w-full justify-center items-center gap-8 p-4">
                <Image src="assets/root-beer.svg" width={114} height={96} alt="root-beer" />
                <Image src="assets/radio.svg" width={137} height={91} alt="radio" />
                <Image src="assets/fries.svg" width={98} height={100} alt="fries" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-4">
              <h2 className="text-turquoise font-bold text-2xl">
                Event Info
              </h2>
              <p>
                <u><b>Location</b></u>
                <br />
                Bethancourt Ballroom (MSC 2300)
                <br />
                730 Olsen Blvd, College Station, TX 77845
              </p>
              <div className="flex flex-col justify-center items-center w-full p-4">
                <Image src="assets/diner-booth.svg" width={363} height={252} alt="diner-booth" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-tiles bg-cover w-full h-[150px]" />
      </div>
      <div className="flex flex-col w-full min-h-screen bg-pale-yellow">
        <div className="bg-white h-8 mt-4" />
        <div className="flex flex-col items-center justify-center py-32">
          <div className="flex flex-col bg-menu bg-cover w-[1153px] h-[1537px] px-32 py-24">
            <div className="flex flex-row items-center justify-center">
              <Image src="assets/sundae.svg" width={260} height={379} alt="sundae" />
              <Image src="assets/menu-title.svg" width={473} height={273} alt="menu-title" />
              <div className="flex flex-col items-center justify-center min-w-[260px]">
                <Image src="assets/pie.svg" width={215} height={189} alt="pie" />
                <Image src="assets/burger.svg" width={183} height={166} alt="burger" />
              </div>
            </div>
          </div>
        </div>
=======
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
>>>>>>> parent of 7f2fc4c (navbar, mountain + stars background)
      </div>
    </main>
  )
}
