'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'
import Animal_Kingdon from '../public/images/Animal_Kingdom.jpeg'
import { Metadata } from 'next'
import dynamic from 'next/dynamic';
// import _ from 'lodash';

const HeavyComponent = dynamic(
  () =>  import('./components/HeavyComponent'),
  { 
    ssr: false,
    loading: () => <p>Loading...</p>}
);

export default function Home() {
  // const session =  await getServerSession(authOptions)
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      {/* <Image 
        src="https://bit.ly/react-cover" 
        alt="Animal Kingdom"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>
        {/* Hello { session && <span>{session.user!.name}</span>} */}
        Hello World
      </h1>
      <button 
        className='btn btn-primary'
        onClick={() => setVisible(true)}
      >
        Show
      </button>
      <button 
        className='btn btn-primary'
        onClick={async () => {
          const _ = (await import('lodash')).default;

          const users = [
            { name: 'c'},
            { name: 'b'},
            { name: 'a'},
          ];
          const sortedUsers = _.orderBy(users, ['name']);
          console.log('sortedUsers', sortedUsers)
        }}
      >
        Sort
      </button>
      {isVisible && <HeavyComponent />}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
