import Image from 'next/image';
import { Banner } from './components/banner';
import { PrimaryButton } from './components/primaryButton';
import Link from 'next/link';
import { YouTubeEmbed } from '@next/third-parties/google';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center'>
        <Banner
          src='/homeBanner.svg'
          bannerQuote='Creative Perspectives to Healing'
        />
      </div>

      <section id='smallIntroduction'>
        <div className='flex gap-24 text-justify'>
          <div className='flex flex-col flex-1'>
            {/* Here will have an h2 + paragraph bold + paragraph*/}
            <div>
              <h2>Life is complicated.</h2>
              <h2 className='relative'>Let’s figure it out.</h2>
              <Image
                src='/underline.png'
                width={300}
                height={300}
                alt='This is an underlining symbol on the home page of Elizabeth Nardella Counselling Website'
                className='absolute lg:top-[45rem] lg:left-[25rem]'
              />
            </div>
            <p className='italic font-bold mb-3 mt-10'>
              What if caring for your mind could transform your body too?
            </p>
            <p className='mb-5'>
              If you have been thinking about starting or continuing your
              counselling journey, but you struggle with the traditional methods
              of counselling, this is the right place for you.
            </p>
            <p className='mb-6'>
              Therapy comes in many forms, and not every approach fits everyone.
              I specialize in <strong>Somatic Therapy</strong>, which focuses on
              the <strong>connection</strong> between <strong>mind</strong> and{' '}
              <strong>body</strong>. We will use mindful movement and body
              awareness to help you work through your emotions comfortably and
              effectively.
            </p>
            <p className='text-sm italic'>
              If you feel like this approach resonates with you, book your
              session. Let's start this beautiful journey together.
            </p>
            <PrimaryButton
              name='Book Your Session Now'
              href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
            />
          </div>
          <div className=''>
            {/* here is gonna be a picture of elizabeth */}
            <Image
              alt='Elizabeth smiling ona  field of flowers - Elizabeth Nardella Counselling'
              src='/elizabeth-counsellor.png'
              width={300}
              height={600}
            />
          </div>
        </div>
      </section>

      <section id='whyChooseUs' className='bg-white'>
        <div className='flex gap-64'>
          <div className='flex flex-col items-center justify-center'>
            <Image src='/Understood.png' width={100} height={100} alt='' />
            <h3 className='mb-2'>Be Understood</h3>
            <p className='text-center'>
              We welcome people from all backgrounds and beliefs. You deserve to
              feel understood.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src='/Clarity.png' width={100} height={100} alt='' />
            <h3 className='mb-2'>Get Clarity</h3>
            <p className='text-center'>
              Understanding the intricacies of our minds, helps us be the best
              versions of ourselves.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image src='/icons.png' width={100} height={100} alt='' />
            <h3 className='mb-2'>Move Forward</h3>
            <p className='text-center'>
              Build the skills and awareness you need to find and take your next
              steps.
            </p>
          </div>
        </div>
      </section>

      <section id='quoteSection'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-[2rem] text-center mb-10'>
            "By becoming more aware of our bodies and the sensations within
            them, we can begin to understand the messages they are sending us
            and take steps towards healing and well-being."
          </p>
          <p>Babette Rothschild</p>
        </div>
      </section>

      <section id='healthyMindHealthyBody' className='bg-white'>
        <div className='flex gap-32 items-center'>
          <div className='flex flex-1 flex-col'>
            <h2 className='mb-5'>Healthy Mind, Healthy Body</h2>
            <p className='font-bold mb-5 italic'>
              Did you know that taking care of our mind can improve your overall
              well-being?
            </p>
            <p>
              When you take care of your mind, you will be more equipped to{' '}
              <strong>handle stress</strong>, make better decisions, and live a
              more <strong>balanced</strong> lifestyle. A healthy mind is
              connected to emotional stability, which is vital to boosting your
              immune system, and increasing vitality levels.
            </p>
          </div>
          <div>
            <Image
              src='/nardellaCounselling.jpeg'
              width={400}
              height={400}
              alt='Elizabeth sitting on a counselling chair - Elisabeth Nardella Counselling'
              className='object-cover object-center'
            />
          </div>
        </div>
      </section>

      <section id='howWeCanHelpYou'>
        <div className='flex flex-col justify-center items-center'>
          <h2>How We Can Help You</h2>
          <div className='flex gap-24 mt-10 text-center'>
            <div className='flex-1 flex flex-col items-center'>
              <Link href='/expertise/somatictherapy'>
                <Image
                  src='/somaticTherapy.png'
                  alt=''
                  width={300}
                  height={300}
                  className='mb-5'
                />
              </Link>
              <Link href='/expertise/somatictherapy'>
                <p>Somatic Therapy</p>
              </Link>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <Link href='/expertise/womenscounselling'>
                <Image
                  src='/womensCounselling.png'
                  alt=''
                  width={300}
                  height={300}
                  className='mb-5'
                />
              </Link>
              <Link href='/expertise/womenscounselling'>
                <p className='text-center'>Women's Counselling</p>
              </Link>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <Link href='/expertise/datingandrelationships'>
                <Image
                  src='/datingAndRelationships.png'
                  alt=''
                  width={300}
                  height={300}
                  className='mb-5'
                />
              </Link>
              <Link href='/expertise/datingandrelationships'>
                <p className='text-center'>Dating & Relationships</p>
              </Link>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <Link href='/expertise/youth'>
                <Image
                  src='/youth+14Therapy.png'
                  alt=''
                  width={300}
                  height={300}
                  className='mb-5'
                />
              </Link>
              <Link href='/expertise/youth'>
                <p>Youth +14Therapy</p>
              </Link>
            </div>
            <div className='flex-1 flex flex-col items-center'>
              <Link href='/expertise/griefandloss'>
                <Image
                  src='/griefAndLossTherapy.png'
                  alt=''
                  width={300}
                  height={300}
                  className='mb-5'
                />
              </Link>
              <Link href='/expertise/griefandloss' className='text-center'>
                <p className='text-center'>Grief & Loss</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id='elizabethUnplugged' className='bg-white'>
        <div className='flex gap-10 items-center'>
          <div>
            <YouTubeEmbed videoid='LlRuSNR-tPk' width={550} />
          </div>
          <div>
            <h2>Elizabeth Unplugged</h2>
            <h4>A Look Inside Elizabeth's World</h4>
            <p>
              I’m thrilled to share a bit of <strong>my world</strong> with you.
              In this video, I’ll take you on a journey through my passion for
              counselling and my unique approach to helping people achieve
              emotional wellness and <strong>personal growth</strong>.
            </p>
          </div>
        </div>
      </section>
      <section id='blog'>
        <div className='flex flex-row-reverse gap-10'>
          <div className='flex-1'>
            <Link href='/blog'>
              <Image src='/blog.jpg' width={500} height={500} alt='' />
            </Link>
          </div>
          <div className='flex-1'>
            <Link href='/blog'>
              <h2 className='hover:text-[#219C90]'>
                Connecting Through Stories
              </h2>
            </Link>
            <p className='font-bold italic my-5'>
              Are you curious about the thoughts, stories, and experiences that
              shape Elizabeth Nardella Counselling?
            </p>
            <p>
              Take a look at our blog, where we share the heart and soul of what
              we do. Here, you will find personal stories, discussions on
              important topics, informational content, and personal reflections.
              Let’s explore, learn, and grow together!
            </p>
            <p className='mt-5'>
              Take a peek into our world and see what inspires us every day.
            </p>
          </div>
        </div>
      </section>
      <section id='contactForm' className='bg-white'>
        <div className='flex gap-10 items-center'>
          <div className='flex-1 lg:mr-18'>
            <div className='relative'>
              <h2>Feeling Better Starts with a Single Message</h2>
              <Image
                src='/underline.png'
                width={300}
                height={300}
                alt='This is an underlining symbol on the home page of Elizabeth Nardella Counselling Website'
                className='absolute lg:top-[-30px] lg:left-[10rem]'
              />
            </div>
          </div>
          <div className='flex-1'>
            <label>Name</label>
            <div className='flex gap-5 my-2'>
              <input
                type='text'
                placeholder='First Name'
                className='input input-bordered w-full'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='input input-bordered w-full'
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type='text'
                placeholder='Email'
                className='input input-bordered w-full my-2'
              />
            </div>
            <div>
              <label>Message</label>
              <textarea className='textarea textarea-bordered w-full my-2'></textarea>
            </div>
            <div>
              <PrimaryButton name='Submit Your Message' href='' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
