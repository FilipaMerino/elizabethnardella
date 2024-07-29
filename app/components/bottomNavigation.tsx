'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const BottomNavigation = () => {
  const router = useRouter();

  return (
    <div className='px-64 py-16'>
      <div className='flex justify-around'>
        <Link href='/consultations'>
          <Image
            alt=''
            width={200}
            height={200}
            src={
              router.pathname === '/consultations'
                ? 'meet_elizabeth.svg'
                : '/inPersonConsultations.svg'
            }
            alt=''
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>
        <Link href='/consultations'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/virtualConsultations.svg'
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>

        <Link href='/resources'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/resources.svg'
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>

        <Link href='/blog'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/blog.svg'
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>

        <Link href='/expertise'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/expertise.svg'
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>
      </div>
    </div>
  );
};
