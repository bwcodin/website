import ProgramCard from './ProgramCard';

const Program = () => {
  return (
    <div className='flex flex-col py-20 gap-y-12 mx-5 items-center'>
      <div className='flex flex-col items-center gap-y-2'>
        <h2 className='md:text-4xl text-xl font-bold text-center text-bytewiseBlue'>
          Our Programs
        </h2>
        <p className='text-black md:text-2xl text-base text-center'>
          Unlock the power of coding with our programs.
        </p>
      </div>
      <div className='md:grid md:grid-cols-2 gap-7 w-full md:place-items-center flex flex-col'>
        <ProgramCard
          image='/assets/coding.jpg'
          path='/courses'
          title='Introduction to Coding'
        />
        <ProgramCard
          image='/assets/app_dev.jpg'
          path='/courses'
          title='App Development'
        />
        <ProgramCard
          image='/assets/web_design.jpg'
          path='/courses'
          title='Web Development (UI/UX)'
        />
        <ProgramCard
          image='/assets/capstone.jpeg'
          path='/capstone-projects'
          title='Capstone Projects'
        />
      </div>
    </div>
  );
};

export default Program;
