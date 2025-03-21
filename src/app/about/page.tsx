import Instructors from '@/components/about/Instructors';
import Mission from '@/components/about/Mission';
import Pathway from '@/components/about/Pathway';
import Specialisation from '@/components/about/Specialisation';
import SubPageHeader from '@/components/subPageHeader';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className=''>
      <SubPageHeader title='About' />
      <Mission />
      <Pathway />
      <Specialisation />
      <div className='relative w-full md:h-[800px] h-[250px] mt-12'>
        <Image
          src='/assets/aboutSection.png'
          alt='Mission'
          fill
          objectFit='contain'
        />
      </div>
      <Instructors />
    </div>
  );
};

export default AboutUs;
