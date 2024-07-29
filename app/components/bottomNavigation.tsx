import Image from 'next/image';

export const BottomNavigation = () => {
  return (
    <div className='px-64'>
      <div className='flex justify-around'>
        <Image
          alt=''
          width={200}
          height={200}
          src='/inPersonConsultations.svg'
        />
        <Image
          alt=''
          width={200}
          height={200}
          src='/virtualConsultations.svg'
        />
        <Image alt='' width={200} height={200} src='/resources.svg' />
        <Image alt='' width={200} height={200} src='/blog.svg' />
        <Image alt='' width={200} height={200} src='/resources.svg' />
      </div>
    </div>
  );
};
