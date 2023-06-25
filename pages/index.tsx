import Image from 'next/image'
import { Archivo, Zen_Tokyo_Zoo, Inter } from 'next/font/google'
import Link from 'next/link'

const archivo = Archivo({ subsets: ['latin'] })
const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start ${archivo.className}`}
    >
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
      <div className={`flex flex-col border-t-32 border-light-blue min-h-screen ${inter.className}`}>
        <div className="flex flex-col justify-start items-center w-full pt-16 gap-12 text-lg px-52">
          <h1 className={`text-6xl text-turquoise ${zenTokyoZoo.className}`}>
            WELCOME IN, AGGIE!
          </h1>
          <p className="text-center">
            HowdyHack is a 24-hour, themed, <b>beginner focused</b> hackathon <b>exclusively for Texas A&M students</b>, designed to showcase TAMU's diverse range of innovative ideas in a collaborative environment. At the event, you'll have the opportunity to create your own software and hardware products with up to <b>4 team members</b> that wow judges and win prizes. Go gig 'em!
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
                After you sign up, you will receive a confirmation email letting you know you're good to go. You can form a team yourself or find one during the team building portion right before the event.
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
      <div>

      </div>
    </main>
  )
}
