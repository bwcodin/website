'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CourseCatalog = () => {
  const [introOpen, setIntroOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(false);
  const [uiOpen, setUiOpen] = useState(false);
    const [stanfordAI, setStanfordAI] = useState(false);
  return (
    <div className='md:py-24 py-12 md:px-40 px-7 flex flex-col gap-y-4 bg-grey'>
      <h2 className='font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue'>
        Course Catalog
      </h2>
      {/* BEGINNER */}
      <div
        className={`${
          !introOpen && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setIntroOpen(!introOpen)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={
              introOpen ? '/assets/down-arrow.png' : '/assets/right-arrow.png'
            }
            width={16}
            height={16}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 md:w-1/2'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans md:text-4xl text-xl font-bold'>
              Introduction to Coding
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight'>
              <span className='text-beginner'>Beginner</span> • 32 Hours{' '}
              <span className={`${!introOpen && 'hidden'}`}>
                • 2-6 Students
              </span>
            </div>
          </div>
          <p className={`font-dm-sans md:text-2xl ${!introOpen && 'hidden'}`}>
            Get started with coding following our customized curriculum! Learn
            the basics of coding and its limitless applications. Learn how to
            write basic programs that can solve math problems, manipulate words,
            and draw. No prior coding experience necessary.{' '}
          </p>
        </div>
        <div
          className={`flex flex-col gap-y-7 font-dm-sans md:w-1/2 ${
            !introOpen && 'hidden'
          }`}
        >
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Coding Language
            </h3>
            <p className='font-dm-sans md:text-2xl'>Python</p>
          </div>
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Course Content
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-10 px-5'>
              <li>Data types.</li>
              <li>Operators, binary logic.</li>
              <li>IF, IF-ELSE, ELSE-IF statements.</li>
              <li>Loops.</li>
              <li>Simple data structures.</li>
              <li>Drawing with Python libraries.</li>
              <li>Code your own game.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* INTERMEDIATE */}
      <div
        className={`${
          !webOpen && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setWebOpen(!webOpen)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={webOpen ? '/assets/down-arrow.png' : '/assets/right-arrow.png'}
            width={16}
            height={16}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 md:w-1/2'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans md:text-4xl text-xl font-bold'>
              Web App Development
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight'>
              <span className='text-intermediate'>Intermediate</span> • 28 Hours
              <span className={`${!webOpen && 'hidden'}`}>• 2-6 Students</span>
            </div>
          </div>
          <p className={`font-dm-sans md:text-2xl ${!webOpen && 'hidden'}`}>
            Develop an interactive web-based application like WhatsApp or
            Facebook. Get started on the path to becoming a full-stack web
            developer! Learn all about the popular MERN stack, from setting up a
            server to creating a user interface. Some prior coding experience
            required.
          </p>
        </div>
        <div
          className={`flex flex-col gap-y-7 font-dm-sans md:w-1/2 ${
            !webOpen && 'hidden'
          }`}
        >
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Coding Language
            </h3>
            <p className='font-dm-sans md:text-2xl'>Javascript</p>
          </div>
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Course Content
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-10 px-5'>
              <li>MERN Stack - MongoDB, Express, React and Node.js.</li>
              <li>HTML/CSS web development.</li>
              <li>Server theory.</li>
              <li>Web sockets and data routing.</li>
              <li>User authentication implementation.</li>
              <li>
                Build an interactive web chat app, customize and deploy it for
                use!
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* UI/UX */}
      <div
        className={`${
          !uiOpen && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setUiOpen(!uiOpen)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={uiOpen ? '/assets/down-arrow.png' : '/assets/right-arrow.png'}
            width={16}
            height={16}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 md:w-1/2'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans text-xl md:text-4xl font-bold'>
              Website Design (UI/UX)
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight'>
              <span className='text-beginner'>Beginner</span> • 21 Hours{' '}
              <span className={`${!uiOpen && 'hidden'}`}>• 2-6 Students</span>
            </div>
          </div>
          <p className={`font-dm-sans md:text-2x ${!uiOpen && 'hidden'}`}>
            Combine coding and creativity to develop a personal website. Find
            out how to build a website, create good designs, animate content,
            and effectively use interactive elements. No prior coding experience
            necessary.
          </p>
        </div>
        <div
          className={`flex flex-col gap-y-7 font-dm-sans md:w-1/2 ${
            !uiOpen && 'hidden'
          }`}
        >
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Coding Language
            </h3>
            <p className='font-dm-sans md:text-2xl'>HTML/CSS, JavaScript</p>
          </div>
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Course Content
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-10 px-5'>
              <li>HTML</li>
              <li>CSS styling</li>
              <li>UI/UX design</li>
              <li>Introduction to Javascript</li>
              <li>User interactions and animations</li>
              <li>Website building with AI</li>
              <li>Build your own personal website.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Stanford AI Playground*/}
      <div
        className={`${
          !stanfordAI && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setStanfordAI(!stanfordAI)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={stanfordAI ? '/assets/down-arrow.png' : '/assets/right-arrow.png'}
            width={16}
            height={16}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 md:w-1/2'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans text-xl md:text-4xl font-bold'>
              Stanford AI Playground
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight'>
              <span className='text-beginner'>Beginner</span> • 15 Hours{' '}
              <span className={`${!stanfordAI && 'hidden'}`}>• 2-6 Students</span>
            </div>
          </div>
          <p className={`font-dm-sans md:text-2x ${!stanfordAI && 'hidden'}`}>
            Developed by Stanford University educators, explore and dive into the future of technology and conding using a unique no-code platform
          </p>
        </div>
        <div
          className={`flex flex-col gap-y-7 font-dm-sans md:w-1/2 ${
            !stanfordAI && 'hidden'
          }`}
        >
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Coding Language
            </h3>
            <p className='font-dm-sans md:text-2xl'>Proprietary AI training blocks. No code needed!</p>
          </div>
          <div className='flex flex-col gap-y-3'>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              Course Content
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-10 px-5'>
              <li>Basic AI concepts and logic</li>
              <li>How does AI generate content?</li>
              <li>Training AI models</li>
              <li>AI applications in society</li>
              <li>Neural networks</li>
              <li>Data analysis</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mx-7'>
        <p className='font-dm-sans md:text-2xl'>
          Interested in our courses? Don&apos;t see a course that interests you?
        </p>
        <p className='font-dm-sans md:text-2xl'>
          <Link
            className='underline underline-offset-[6px]'
            href={"https://wa.me/85296348923"}
            target='_blank'
          >
            Contact us directly on WhatsApp!
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default CourseCatalog;
