import Image from 'next/image';
import Link from 'next/link';

export const BottomNavigation = () => {
  return (
    <div className='px-64 py-16'>
      <div className='flex justify-around'>
        <Link href='/consultations'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/inPersonConsultations.svg'
          />
        </Link>
        <Link href='/consultations'>
          <Image
            alt=''
            width={200}
            height={200}
            src='/virtualConsultations.svg'
          />
        </Link>

        <Link href='/resources'>
          <Image alt='' width={200} height={200} src='/resources.svg' />
        </Link>

        <Link href='/blog'>
          <Image alt='' width={200} height={200} src='/blog.svg' />
        </Link>

        <Link href='/expertise'>
          <Image alt='' width={200} height={200} src='/expertise.svg' />
        </Link>
      </div>
    </div>
  );
};
