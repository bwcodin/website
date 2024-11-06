import Image from 'next/image';
import Link from 'next/link';

const ProgramCard = ({
  image,
  title,
}: {
  image: string;
  title: string;
  path: string;
}) => {
  return (
    <Link
      href={'/'}
      className=' w-full md:h-[18.75rem] h-[175px] relative font-dm-sans rounded-2xl group'
    >
      <Image
        src={image}
        alt={title}
        fill
        objectFit='cover'
        className='z-0 rounded-2xl'
      />
      <div className='absolute inset-0 bg-darkGrey opacity-50 z-10 rounded-2xl group-hover:opacity-100 transition duration-500'></div>
      <div className='absolute z-20 md:bottom-7 md:left-7 bottom-5 left-5'>
        <h3 className='text-white md:text-4xl text-xl font-bold'>{title}</h3>
      </div>
    </Link>
  );
};

export default ProgramCard;
