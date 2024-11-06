import Image from 'next/image';

const Hero = () => {
  return (
    <div className='md:mx-40 mx-7 md:my-24 my-12 text-darkGrey'>
      <h2 className='font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue'>
        Ideate. Innovate. Design. Code.
      </h2>
      <h3 className='font-dm-sans md:text-2xl font-bold mt-2'>
        Build a functioning product that you can be proud of
      </h3>
      <div className='relative w-full h-[350px] mt-7'>
        <Image
          src={`/assets/students-back.jpeg`}
          alt='Students'
          fill
          objectFit='cover'
        />
      </div>
      <div className='mt-12 flex flex-col gap-y-4'>
        <h3 className='font-dm-sans md:text-2xl font-bold text-darkGrey mt-2'>
          What are capstone projects?
        </h3>
        <p className='font-dm-sans md:text-2xl'>
          Modeled after university final-year projects, our capstone projects
          provide students with the opportunity to apply their skills in
          computer science to solve real-world problems. Students—under the
          guidance of Bytewise instructors—will ideate, innovate, design, and
          code a final product to meet stakeholder requirements and customer
          use-cases. The best of it all: we partner with prestigious
          universities and institutions to ensure that each project is unique,
          fun, and challenging.
        </p>

        <span className='border-b border-b-darkGrey mx-auto w-20 md:my-12 my-6'></span>

        <div className='flex flex-col items-center md:gap-y-12 gap-y-6'>
          <h3 className='font-dm-sans md:text-2xl font-bold text-darkGrey mt-2'>
            Recent Partners
          </h3>
          <div className='flex md:gap-x-12 gap-x-6'>
            <Image
              src={'/assets/hkmm-logo.png'}
              width={300}
              height={80}
              alt='partner-logo'
            />
            <Image
              src={'/assets/silk-tea-logo.png'}
              width={350}
              height={240}
              alt='partner-logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
