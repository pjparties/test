import Image from 'next/image'
import { Inter } from 'next/font/google'
import Creater from '@/components/Creater'
import Selector from '@/components/Selector'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Shopping App - Parth Juneja</h1>
            <Creater />
            <Selector />
        </div>
    )
}
