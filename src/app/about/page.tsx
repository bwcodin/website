import Instructors from '@/components/about/Instructors';
import Mission from '@/components/about/Mission';
import Pathway from '@/components/about/Pathway';
import Specialisation from '@/components/about/Specialisation';
import SubPageHeader from '@/components/subPageHeader';

const AboutUs = () => {
  return (
    <div className=''>
      <SubPageHeader title='About' />
      <Mission />
      <Pathway />
      <div className='relative w-full md:h-[500px] h-[250px]'>
        <Image
          src='/assets/aboutSection.png'
          alt='Mission'
          fill
          objectFit='contain'
        />
      </div>
      <Specialisation />
      <Instructors />
    </div>
  );
};

export default AboutUs;
