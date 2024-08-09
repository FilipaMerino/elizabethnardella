import Image from 'next/image';

type BannerProps = {
  src: string;
  bannerQuote: string;
};

export const Banner = (props: BannerProps) => {
  return (
    <div
      className='bg-cover bg-center h-[35rem] w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${props.src})` }}>
      <h1 className='text-6xl p-5 text-white'>{props.bannerQuote}</h1>
    </div>
  );
};
