'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';

const Features = () => {
  const isBreakPoint = useMediaQuery(768);
  return (
    <div className='flex flex-col py-20 bg-lighBlue gap-y-12'>
      <h2 className='text-darkGrey md:text-4xl text-2xl font-bold text-center'>
        Why Computer Science
      </h2>
      <div className='md:flex md:justify-evenly grid grid-cols-2 gap-10 place-items-center'>
        <div className='flex flex-col items-center gap-y-5 md:max-w-[17rem] max-w-36 text-center'>
          <Image
            src={'/assets/Idea.png'}
            alt='critical-thinking'
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <h3 className='font-dm-sans md:text-2xl text-base font-bold text-darkGrey'>
            Boost critical thinking
          </h3>
        </div>
        <div className='flex flex-col items-center gap-y-5 md:max-w-[17rem] max-w-36 text-center'>
          <Image
            src={'/assets/coding-ill.png'}
            alt='critical-thinking'
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <h3 className='font-dm-sans md:text-2xl text-base font-bold text-darkGrey'>
            Improve teamwork skills
          </h3>
        </div>
        <div className='flex flex-col items-center gap-y-5 md:max-w-[17rem] max-w-36 text-center'>
          <Image
            src={'/assets/literacy.png'}
            alt='critical-thinking'
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <h3 className='font-dm-sans md:text-2xl text-base font-bold text-darkGrey'>
            Enhance technical literacy
          </h3>
        </div>
        <div className='flex flex-col items-center gap-y-5 md:max-w-[17rem] max-w-36 text-center'>
          <Image
            src={'/assets/project_management.png'}
            alt='critical-thinking'
            width={isBreakPoint ? 100 : 175}
            height={isBreakPoint ? 100 : 175}
          />
          <h3 className='font-dm-sans md:text-2xl text-base font-bold text-darkGrey'>
            Learn project management
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
