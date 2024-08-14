import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<div className='flex justify-between p-5 items-center px-16'>
			<div>
				<Link href='/'>
					<Image
						src='/logo.png'
						width={100}
						height={100}
						alt='Logo of Elizabeth Nardella Counselling'
					/>
				</Link>
			</div>
			<div className='flex gap-5'>
				<li className='list-none'>
					<Link href='/about' className='font-normal text-[#333333]'>
						About
					</Link>
				</li>
				<li className='list-none'>
					<Link href='/consultations' className='font-normal text-[#333333]'>
						Consultations
					</Link>
				</li>
				<li className='list-none'>
					<Link href='/expertise' className='font-normal text-[#333333]'>
						Expertise
					</Link>
				</li>
				<li className='list-none'>
					<Link href='/resources' className='font-normal text-[#333333]'>
						Resources
					</Link>
				</li>
				<li className='list-none'>
					<Link href='contact/' className='font-normal text-[#333333]'>
						Contact Us
					</Link>
				</li>
				<li className='list-none'>
					<Link href='/blog' className='font-normal text-[#333333]'>
						Blog
					</Link>
				</li>
			</div>
		</div>
	);
};
