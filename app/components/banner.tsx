import Image from 'next/image'

type BannerProps = {
   src: string;
}

export const Banner = (props: BannerProps) => {
    return(
        <div>
            <h1 className='text-5xl'>This is a Banner</h1>
            <Image
                src={props.src} 
                width={500}
                height={500}
                alt="A certified counsellor in South Surrey BC offering in-person or online counselling sessions, specialized in art, somatic and narrative therapy, as well as women's counselling and youth(+24). "
    />
        </div>
    )
}