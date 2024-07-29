type primaryButtonProps = {
  name: string;
  href: string;
};

export const PrimaryButton = (props: primaryButtonProps) => {
  return (
    <div className='pt-5'>
      <a
        className='btn btn-s sm:btn-md md:btn-lg lg:btn-wide bg-[#219C90] text-white font-light'
        href={props.href}>
        {props.name}
      </a>
    </div>
  );
};
