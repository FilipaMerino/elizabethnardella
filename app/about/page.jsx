import { Banner } from '../components/banner';
import Link from 'next/link';
import Image from 'next/image';
import { YouTubeEmbed } from '@next/third-parties/google';
import { BottomNavigation } from '../components/bottomNavigation';

const About = () => {
	return (
		<div>
			<Banner
				src={'/HandInHand.jpg'}
				bannerQuote='Get to Know Elizabeth Nardella Counselling'
			/>
			<div>
				{/* ELIZABETH */}

				<section id='meetElizabeth-ElizabethNardellaCounselling'>
					<div className='flex items-center'>
						<div className='flex-1 transition-transform duration-500 ease-in-out transform hover:scale-110'>
							<Link href='/about/elizabeth'>
								<Image
									className='rounded-md'
									src='/meet_elizabeth.svg'
									width={450}
									height={500}
									alt="A certified counsellor in South Surrey BC offering in-person or online counselling sessions, specialized in art, somatic and narrative therapy, as well as women's counselling and youth(+24). "
								/>
							</Link>
						</div>
						<div className='flex-1'>
							<h2 className='text-5xl pb-10 text-[#A94250] hover:text-[#219C90]'>
								<Link href='/about/elizabeth'>Meet Elizabeth</Link>
							</h2>
							<p>Hey there, I am Elizabeth!</p>
							<p>
								I am a lot of things and amongst them, I am an{' '}
								<Link href='/expertise' className='text-[#A94250]'>
									<strong>experienced</strong>
								</Link>{' '}
								counsellor, with a passion for finding new and creative ways to
								help people heal.
							</p>
							<p className='italic font-bold my-5'>
								What else can I tell you about myself?
							</p>
							<p>
								I am deeply committed to supporting the{' '}
								<Link href='' className='text-[#A94250] font-bold'>
									LGBTQ2SAI+ community
								</Link>
								, and when I am not in counselling mode, you will often find me
								sailing off to new adventures and exploring different cultures.
								And of course, I am totally crazy about Lyon, my adorable pup
								who keeps me grounded and brings so much joy to my life.
							</p>
						</div>
					</div>
				</section>

				<section id='elizabethUnplugged-ElizabethNardellaCounselling'>
					<div className='flex flex-row-reverse gap-16'>
						<div>
							<YouTubeEmbed
								videoid='LlRuSNR-tPk'
								width={550}
								style="background-image: url('/counsellorAndDogTherapist-ElizabethNardellaCounselling.jpg'); border-radius: 0.375rem;"
							/>
						</div>
						<div>
							<h2>Elizabeth Unplugged</h2>
							<h4>A Look Inside Elizabeth's World</h4>
							<p>
								I’m thrilled to share a bit of{' '}
								<Link href='' className='text-[#A94250] font-bold'>
									my world
								</Link>{' '}
								with you. In this video, I’ll take you on a journey through my
								passion for counselling and my unique approach to helping people
								achieve emotional wellness and{' '}
								<Link href='' className='text-[#A94250] font-bold'>
									personal growth
								</Link>
								.
							</p>
						</div>
					</div>
				</section>

				{/* LYON */}

				<section className='bg-white'>
					<div className='flex items-center'>
						<div className='flex-1 transition-transform duration-500 ease-in-out transform hover:scale-110'>
							<Link href='/about/lyon'>
								<Image
									className='rounded-md'
									src='/Therapy_dog.svg'
									width={450}
									height={500}
									alt="A therapy dog. You can choose to have him on your counselling sessions. He's a good company and makes talking about traumatic and emotional topics, easier."
								/>
							</Link>
						</div>
						<div className='flex-1'>
							<h2>
								<Link href='/about/lyon'>Meet Lyon</Link>
							</h2>

							<p>
								Think of Lyon as your furry friend, available to wag his tail
								and bring a calming, fun presence to your sessions, especially
								when talking about more difficult topics. Not a fan of dogs? No
								worries - Lyon loves to take a day off.
							</p>
						</div>
					</div>
				</section>
			</div>

			<div>
				<BottomNavigation />
			</div>
		</div>
	);
};

export default About;
