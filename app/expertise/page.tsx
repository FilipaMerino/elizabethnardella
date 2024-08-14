import Link from 'next/link';
import { Banner } from '../components/banner';
import { PrimaryButton } from '../components/primaryButton';

const Expertise = () => {
	return (
		<div>
			<Banner src='/bannerExpertise.jpg' bannerQuote='Areas of Expertise' />
			<section id='yourJourney' className='flex-col'>
				<div>
					{/* <h1> THIS NEEDS A SEO TITLE</h1> */}
					<h2>Your Journey</h2>
					<p className='pb-2'>
						Counselling is a deeply <strong>personal</strong> and{' '}
						<strong>transformative</strong> experience. It's about{' '}
						<strong>understanding yourself</strong> on a deeper level.
					</p>

					<p className='py-5 italic font-light'>
						It's a journey about <strong>growth, self-discovery,</strong> and
						learning how to handle life's challenges with{' '}
						<strong>resilience and confidence.</strong>
					</p>

					<p className='pb-2'>
						In the beginning, you might find it challenging to open up about
						your thoughts, feelings, or experiences, some of which you probably
						haven't shared with anyone. As we progress, you will start noticing
						changes. You might be handling stress better or seeing improvements
						in your relationships. You might find new ways to{' '}
						<strong>cope</strong> with anxiety or{' '}
						<strong>feel more at peace.</strong>
					</p>

					<p>
						By the end of our time together, my hope is that you feel more{' '}
						<strong>empowered</strong> and in <strong>tune</strong> with
						yourself.
					</p>
				</div>
			</section>

			<section id='serviceSomaticTherapy' className='bg-white'>
				<div className='flex items-center'>
					<div className='flex flex-col jsutify-center  flex-1'>
						<h2>
							<a href='/expertise/somatictherapy'>Somatic Therapy</a>
						</h2>
						<h3 className='text-3xl text-[#333333]'>
							Healing through the body
						</h3>
					</div>

					<div className='flex-1 flex-col'>
						<p>
							Have you ever heard of <strong>Somatic Therapy</strong>?{' '}
						</p>
						<p className='pb-3'>
							It’s a body-centered approach to healing, that involves{' '}
							<strong>mindful awareness</strong> of bodily sensations,
							movements, and breathing patterns to help release trauma and
							stress stored in the body. It works at
							<strong> deepening</strong> one’s understanding of their{' '}
							<strong>mind-body</strong> connection.
						</p>
						<p className='pb-2'>
							<strong>How can Somatic Therapy help you?</strong>
						</p>

						<li>Stress Reduction</li>
						<li>Trauma Recovery</li>
						<li>Enhanced Self-Awareness</li>
						<li>Emotional Regulation</li>

						<PrimaryButton
							name='Book Your Session'
							href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
						/>
					</div>
				</div>
			</section>

			<section id='serviceWomensCounselling'>
				<div className='flex items-center'>
					<div className='flex flex-1'>
						<Link href='/expertise/womenscounselling'>
							<div className='flex flex-col group'>
								<h2 className='group-hover:text-[#219C90]'> Women’s</h2>
								<h2 className='group-hover:text-[#219C90]'>Counselling</h2>
							</div>
						</Link>
					</div>
					<div className='flex-1'>
						<p>
							Through generations, women have faced challenges in finding their
							own voices and inner power.
						</p>
						<p className='pb-3'>
							That's why I am so passionate about helping you find your voice
							and share your story authentically. We can work together to help
							you find your truth and set boundaries that will let your true
							self shine through. It is your right to say{' '}
							<strong>
								<u>NO</u>
							</strong>
							. And as I like to say:
							<strong>
								<em>"No, it's a complete sentence"</em>
							</strong>
							.
						</p>

						<p className='pb-2 italic text-[14px]'>
							If you have the time, take a look at{' '}
							<a
								href='https://dulwichcentre.com.au/charter-of-story-telling-rights/'
								className='text-[#219C90]'>
								Charter of Story-Telling Rights.
							</a>{' '}
							I believe it’s a powerful reminder for women that saying{' '}
							<strong>NO</strong> is
							<strong> vital</strong> for our well-being.
						</p>

						<PrimaryButton
							name='Book Your Session'
							href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
						/>
					</div>
				</div>
			</section>

			<section id='serviceDatingAndRelationships' className='bg-white'>
				<div id='datingAndRelationships' className='flex items-center'>
					<div className='flex flex-1'>
						<Link href='/expertise/womenscounselling'>
							<div className='flex flex-col group'>
								<h2 className='group-hover:text-[#219C90]'>Dating &</h2>
								<h2 className='group-hover:text-[#219C90]'>Relationships</h2>
							</div>
						</Link>
					</div>
					<div className='flex-1 flex flex-col justify-center'>
						<p className='pb-3'>
							If there is something science will not change over time it’s that{' '}
							<strong>Dating is hard!</strong> Am I right?!
						</p>

						<p className='pb-3'>
							Navigating the twists and turns of dating it’s a journey straight
							to your heart and soul, whether you're starting fresh or trying to
							make sense of what's behind you.
						</p>

						<p className='pb-2'>
							Understanding your patterns, working on how you communicate, and
							nurturing healthier habits are crucial for your relationships.
							Knowing <strong>what you do and do not want</strong>, will help
							you stay true to yourself, and protect you from being with someone
							that doesn't align with your energy and needs.
						</p>

						<PrimaryButton
							name='Book Your Session'
							href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
						/>
					</div>
				</div>
			</section>

			<section id='serviceYouthTherapy'>
				<div id='youthTherapy' className='flex items-center  '>
					<div className='flex  flex-1 flex-col'>
						<h2>
							<a href='/expertise/youth'>Youth +14yrs Therapy</a>
						</h2>
						<p className='pr-40 text-[14px] font-light pt-5 italic'>
							Please note, that Elizabeth <strong>does not</strong> work with
							families that are actively in court or families going through the
							separation process without a separation agreement or custody
							agreement. Completed paperwork must be received before the first
							session.{' '}
						</p>
					</div>
					<div className='flex-1'>
						<p className='pb-3'>
							Isn't it curious how teens start to <strong>challenge</strong>{' '}
							their parents identities while figuring out their own?
						</p>

						<p className='pb-3'>
							There are so many aspects of their lives that shape their
							<strong>development</strong>. That’s why I always start with a
							parent or guardian session - it helps me understand what’s
							happening at home and set goals for future sessions. After that,
							I'll work directly with your teen, and we'll decide what works
							best.
						</p>

						<p className='pb-2'>
							<strong>Counselling</strong> can be incredibly beneficial for
							teens living through <strong>adolescence</strong>, or dealing with
							various issues such as:
						</p>

						<li>Anxiety</li>
						<li>Depression</li>
						<li>Behavioral challenges</li>

						<PrimaryButton
							name='Book Your Session'
							href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
						/>
					</div>
				</div>
			</section>

			<section id='serviceGriefAndLossTherapy' className='bg-white'>
				<div id='griefAndLossTherapy' className='flex items-center  '>
					<div className='flex  flex-1 flex-col'>
						<h2>
							<a href='/expertise/griefandloss'>Grief & Loss</a>
						</h2>
					</div>

					<div className='flex-1'>
						<p className='pb-3'>
							Losing a loved one can be extremely hard. Death leaves us
							grappling with life. With its meaning, its fairness, and its
							divine order.
						</p>

						<p className='pb-3'>
							A relationship doesn't end because there's a physical death. The
							stories of the ones we've lost remain important, even if people
							tell us to let go.
						</p>

						<p className='py-5'>
							<strong>Have you ever heard about Narrative Therapy?</strong>
						</p>

						<p className='pb-5'>
							It's a therapy approach that <strong>combines</strong> talk
							therapy and the creative arts to explore the many storylines that
							might emerge during the journey of loss. It embraces and
							acknowledges the continuing bonds between the living and the
							deceased, <strong>instead</strong> of encouraging you to let go.
						</p>
						<p className='text-[14px] font-light italic'>
							During our therapy sessions, we might use some art-based exercises
							- no art experience or skill is required. These activities are
							meant to help you express your feelings better.
						</p>
						<PrimaryButton
							name='Book Your Session'
							href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Expertise;
