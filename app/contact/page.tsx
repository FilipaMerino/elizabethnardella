import Image from 'next/image';
import { PrimaryButton } from '../components/primaryButton';
import Link from 'next/link';
import { SiInstagram } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';

const Contact = () => {
  return (
    <div>
      <section id='contactForm'>
        <div className='flex gap-10 items-center'>
          <div className='flex-1 lg:mr-18'>
            <div className='relative'>
              <h2 className='lg:mr-[3rem]'>
                Feeling Better Starts with a Single Message
              </h2>
              <div className='mt-16'>
                <p className='text-[#219C90] my-2'>
                  hello@elizabethnardellacounselling.com
                </p>
                <p>778.512.7300</p>
                <div className='my-3'>
                  <p>Private Office</p>
                  <p>South Surrey, British Columbia</p>
                </div>
                <p className='text-xs italic mr-[10rem]'>
                  You will receive the address and parking instructions ahead of
                  your scheduled appointment
                </p>

                <div className='flex mt-5 gap-2'>
                  <Link href='https://www.instagram.com/elizabethnardellacounselling/'>
                    <SiInstagram className='text-xl' />
                  </Link>
                  <Link href='https://www.facebook.com/p/Elizabeth-Nardella-Counselling-100072182674454/'>
                    <ImFacebook className='text-xl' />
                  </Link>
                </div>
              </div>
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
            <p className='text-[14px] italic my-5'>
              Please note, due to being present for her clients and a busy
              schedule of appointments, it may be 48 hours to receive a response
              to any digital or phone communication.{' '}
            </p>
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
    </div>
  );
};

export default Contact;
