import Image from 'next/image'
import { Inter } from 'next/font/google'
import Creater from '@/components/Creater'
import Selector from '@/components/Selector'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className='main-wrapper w-full h-full'>
            <h1 className="text-4xl font-bold text-center mb-10">Shopping App - Parth Juneja</h1>
            <p className="text-center text-lg font-semibold text-slate-800">Updates Pending: Global State Management to update the product table in a refresh</p>
            <p className="text-center text-lg font-semibold text-slate-800">Updates Pending: Session Management to retreive previous session and store in LocalStorage on user end</p>
            {/* Github link to repo */}
            <div className='mt-10 mx-auto  text-center rounded border-black border-2 hover:bg-slate-400 w-fit'>
                <a className='text-xl p-2 font-semibold cursor-pointer' href="https://github.com/pjparties/test "> Github Repo Link </a>
            </div>
            <Creater />
            <Selector />
        </div>
    )
}
