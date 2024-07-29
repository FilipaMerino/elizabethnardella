import Image from 'next/image';
import Link from 'next/link';

type BottomNavigationProps = {
  src1: string;
  alt1: string;
  src2: string;
  alt2: string;
};

export const BottomNavigation = (props: BottomNavigationProps) => {
  return (
    <div className='px-64 py-16'>
      <div className='flex justify-around'>
        <Link href='/consultations'>
          <Image
            alt=''
            width={200}
            height={200}
            src={props.src1}
            alt={props.alt1}
            className='transition-transform duration-500 ease-in-out transform hover:scale-110'
          />
        </Link>
        <Link href='/consultations'>
          <Image
            alt={props.alt2}
            width={200}
            height={200}
            src={props.src2}
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
