import Image from 'next/image'
import { Archivo, Zen_Tokyo_Zoo, Inter } from 'next/font/google'
import Link from 'next/link'

const archivo = Archivo({ subsets: ['latin'] })
const zenTokyoZoo = Zen_Tokyo_Zoo({ weight: '400', subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center text-3xl text-pale-yellow font-bold ${archivo.className} bg-dark-purple`}
    >
      Website under maintenance...
    </main>
  )
}
