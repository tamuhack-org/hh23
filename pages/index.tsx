import Image from 'next/image'
import { Archivo } from 'next/font/google'
import Link from 'next/link'

const archivo = Archivo({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start ${archivo.className}`}
    >
      <div className="flex flex-col w-full min-h-screen bg-dark-purple">
        <div className="flex flex-row justify-between items-center w-full h-24 px-16 border-b-2 border-b-pale-yellow text-pale-yellow">
          <Image src="assets/hh-logo.svg" height={58} width={58} alt="hh23" />
          <div className="flex flex-row gap-8 font-bold ">
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
        <div className="w-full min-h-screen bg-mountain-stars mt-8 bg-cover">
          
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </main>
  )
}
