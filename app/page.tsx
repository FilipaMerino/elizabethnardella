import Image from 'next/image';
import { Banner } from './components/banner';
import { PrimaryButton } from './components/primaryButton';

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
        <div className='flex flex-col flex-1'>
          {/* Here will have an h2 + paragraph bold + paragraph*/}
          <h2>Life is complicated. Let’s figure it out.</h2>
          <p>
            <strong>
              What if caring for your mind could transform your body too?
            </strong>
          </p>
          <p>
            Life is complicated. Let’s figure it out. What if caring for your
            mind could transform your body too? If you have been thinking about
            starting or continuing your counselling journey, but you struggle
            with the traditional methods of counselling, this is the right place
            for you. Therapy comes in many forms, and not every approach fits
            everyone. I specialize in Somatic Therapy, which focuses on the
            connection between mind and body. We will use mindful movement and
            body awareness to help you work through your emotions comfortably
            and effectively.
          </p>
          <p>
            If you feel like this approach resonates with you, book your
            session. Let's start this beautiful journey together
          </p>
          <PrimaryButton
            name='Book Your Session Now'
            href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
          />
        </div>
        <div className='flex-1'>
          {/* here is gonna be a picture of elizabeth */}
          <Image
            alt=''
            src='/elizabeth-counsellor.png'
            width={300}
            height={600}
          />
        </div>
      </section>
    </main>
  );
}
