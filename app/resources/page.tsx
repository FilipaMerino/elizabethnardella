import { YouTubeEmbed } from '@next/third-parties/google';
import Link from 'next/link';
import { BottomNavigation } from '../components/bottomNavigation';

const Resources = () => {
	return (
		<div>
			<section
				id='definingTheFutureOfGriefPsychologyWithLove-ElizabethNardellaCounselling'
				className='flex-row-reverse gap-16 bg-white'>
				<div>
					<YouTubeEmbed
						videoid='KEexLVcUpwM'
						width={550}
						style="background-image: url('/LorrainHedtkeTedTalks.png'); border-radius: 0.375rem;"
					/>
				</div>
				<div>
					<h2>Defining the future of grief psychology with Love </h2>
					<p className='font-bold italic my-5'>
						Does a relationship die when one of the people involved passes away?
					</p>

					<p className='mb-5'>
						Innovative ideas suggest that relationships continue to matter after
						death, challenging conventional grief psychology.
					</p>
					<p>
						In this talk, Dr. Lorraine Hedtke explores how stories of love
						transcend death, creating powerful connections that live on long
						after our loved one is no longer alive.
					</p>
				</div>
			</section>
			<section
				id='narrativeTherapy-ElizabethNardellaCounselling'
				className='gap-16'>
				<div>
					<YouTubeEmbed
						videoid='CJ0WNIQonog'
						width={550}
						style="background-image: url('/JillFreedmanAndGeneCombsNarrativeTherapy.png'); border-radius: 0.375rem;"
					/>
				</div>

				<div>
					<h2>Narrative Therapy</h2>
					<p className='my-5 font-bold italic'>
						Have you ever tried to visualize different layers of your life’s
						stories?
					</p>
					<p>
						Jill Freedman and Gene Combs created this Dot Exercise to help you
						do that. It’s meant to help you visualize the concepts of Narrative
						Therapy, such as <em>"multi-storied lives"</em>,{' '}
						<em>"thin/thick stories"</em>, and{' '}
						<em>"subordinate storyline development"</em>.
					</p>
				</div>
			</section>
			<section
				id='narrativeTherapy-MaggieCarey-ElizabethNardellaCounselling'
				className='flex-row-reverse gap-16 bg-white'>
				<div>
					<YouTubeEmbed
						videoid='fUaNW4wFww8'
						width={550}
						style="background-image: url('/MaggieCareyNarrativeTherapy.png'); border-radius: 0.375rem;"
					/>
				</div>
				<div>
					<h2>Stepping Out Of The Problem Story</h2>
					<p className='font-bold italic my-5'>
						Have you ever felt stuck in a story that doesn't reflect who you
						truly are?{' '}
					</p>

					<p className='mb-5'>
						Maggie Carey talks about how she helps clients move beyond the
						limitations of their problem story and get to a place where they can
						create and live out their preferred life stories.
					</p>
					<p>
						She has such an amazing way of explaining{' '}
						<strong>Narrative Therapy</strong>!
					</p>
				</div>
			</section>
			<div
				id='helpfulDocuments'
				className='flex flex-col justify-center items-center my-10'>
				<div className='flex flex-col items-center'>
					<h2 className='my-5'>Helpful Documents</h2>
					<Link href='https://6eea2105-431f-4858-813b-d36f0a45f2be.filesusr.com/ugd/cddf0d_75cf9d73cf5d404baf0d1ab588fe25ec.pdf'>
						<p>Tips For Online Counselling</p>
					</Link>
					<Link href='https://bcacc.ca/wp-content/uploads/2022/11/Practice-Summary-Consent-of-Minors-Update-June-25-2015.pdf'>
						<p>BCACC Consent Form</p>
					</Link>
				</div>
			</div>
			<BottomNavigation />
		</div>
	);
};

export default Resources;
