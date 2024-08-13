import { BottomNavigation } from '../components/bottomNavigation';
import Image from 'next/image';
import { PrimaryButton } from '../components/primaryButton';
import { Banner } from '../components/banner';
const Consultations = () => {
  return (
    <div>
      <Banner src='/consultations.png' bannerQuote='Consultations' />
      <section id='inPersonAppointments'>
        <div className='flex-1 flex justify-center'>
          <Image
            src='/inPersonAppointments-ElizabethNardellaCounselling.png'
            width={500}
            height={500}
            alt='inPersonAppontments-Elizabeth-Nardella-Conselling'
          />
        </div>
        <div className='flex-1'>
          <h2>In-Person Appointments</h2>
          <p className='my-5'>
            In-person counselling appointments are available in Elizabeth’s
            private office setting. Appointments are approximately 50 minutes in
            length and can include a wide-range of therapy options from
            narrative therapy, somatic to art-based therapies. If you’re looking
            for something outside of the box, in-person appointments are a great
            fit.{' '}
          </p>
          <p className='font-bold text-xs my-2'>Individual Rate:</p>
          <p className='text-xs'>$165.00 for a 50-min session</p>
          <p className='text-xs'>$247.50 for a 90-min session </p>
          <PrimaryButton
            name='Book Now'
            href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
          />
        </div>
      </section>

      <section id='virtualAppointments' className='flex-row-reverse bg-white'>
        <div className='flex-1 flex justify-center'>
          <Image
            src='/virtualAppointments-ElizabethNardellaCounselling.png'
            width={500}
            height={500}
            alt='inPersonAppontments-Elizabeth-Nardella-Conselling'
          />
        </div>
        <div className='flex-1'>
          <h2>Virtual Appointments</h2>
          <p className='my-5'>
            If video-based counselling appointments are a better option for you
            and your family, Elizabeth is happy to offer virtual appointments.
            Virtual appointments are approximately 50 minutes in length and are
            conducted through Jane. Here are some tips for online counselling
            sessions.
          </p>

          <p className='font-bold text-xs my-2'>Individual Rate:</p>
          <p className='text-xs'>$165.00 for a 50-min session</p>
          <p className='text-xs'>$247.50 for a 90-min session </p>

          <PrimaryButton
            name='Book Now'
            href='https://elizabethnardellacounselling.janeapp.com/locations/elizabeth-nardella-counselling/book#staff_member/1'
          />
        </div>
      </section>
    </div>
  );
};

export default Consultations;
