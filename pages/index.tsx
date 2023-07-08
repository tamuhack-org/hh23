import Image from 'next/image'
import { Archivo, Zen_Tokyo_Zoo, Inter } from 'next/font/google'
import Link from 'next/link'
import SmallNavbar from './components/SmallNavbar'

const archivo = Archivo({ subsets: ['latin'] })
const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${archivo.className}`}
    >
      <div className="bg-dark-purple">
        <div className="fixed hidden lg:flex items-center justify-between px-8 xl:px-32 py-4 w-screen bg-dark-purple z-50 text-pale-yellow border-b-4 border-pale-yellow">
          <div className="w-1/3">
            <Link href="/" target="_blank" rel="noopener noreferrer"
              className="text-3xl rounded-full font-black font-heading navy">
              <Image src="/assets/hh-logo.svg" width={50} height={50} alt="hh-logo" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8 w-1/3 font-bold text-lg">
            <Link href="#info">
              Info
            </Link>
            <Link href="#faq">
              FAQ
            </Link>
            <Link href="#schedule">
              Schedule
            </Link>
            <Link href="#prizes">
              Prizes
            </Link>
            <Link href="#sponsors">
              Resources
            </Link>
          </div>
          <div className="w-1/3 flex justify-end items-center">
            <Link href="https://tamuhack.org" className="xl:flex text-4xl font-bold mr-8 ">
              th
            </Link>
          </div>
        </div>
        <div className="lg:hidden my-0 w-full bg-dark-purple border-b-4 border-pale-yellow">
          <SmallNavbar />
        </div>
        <div className="flex flex-col w-full">

        </div>
      </div>
    </main>
  )
};
