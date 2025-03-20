'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CourseCatalog = () => {
  const [capstoneOpen, setCapstoneOpen] = useState(false);
  const [oneOpen, setOneOpen] = useState(false);
  const [stanfordAI, setStanfordAI] = useState(false);
  return (
    <div className='md:py-24 py-12 md:px-40 px-7 flex flex-col gap-y-4 bg-grey'>
      <h2 className='font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue pb-3'>
        我们的课程
      </h2>
      {/* CAPSTONE PROJECT */}
      <div
        className={`${
          !capstoneOpen && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setCapstoneOpen(!capstoneOpen)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={
              capstoneOpen ? '/assets/down-arrow.png' : '/assets/right-arrow.png'
            }
            width={24}
            height={24}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 px-2 md:px-16'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans md:text-4xl text-xl font-bold'>
              小组实践项目
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight pt-3'>
              <span className='text-beginner'>
              我们的小组实践项目是以世界排名第一的软件工程大学（卡内基梅隆大学）毕业项目/设计为蓝本，与知名大学/机构/品牌合作，为学生提供使用计算机和编程技能解决现实商业问题的机会。我们将确保每个项目都是独特的、有趣的和富有挑战的，在Bytewise讲师的指导下，学生将构思、创新、设计和编码最终产品，以满足我们的顾客以及其产品使用者的要求。
              </span>
            </div>
          </div>
          <div className={`flex flex-col gap-y-3 font-dm-sans ${!capstoneOpen && 'hidden'}`}>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              小组实践项目流程
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-8 pl-5 leading-[30px]'>
              <li>学生被分成若干小组，专注于项目的一个领域（例如用户界面、后台系统、数据分析、人工智能等）。 </li>
              <li>每个小组由 2-4 名学生以及一名该领域的专家指导教师组成。 </li>
              <li>团队确定后，将在项目开始时安排常规课程（每周至少2.5-4小时，视项目难易程度而定），以满足所有学生的需求。 </li>
              <li>学生以团队的形式起草和设计项目，确保满足合作机构的关键交付要求。 </li>
              <li>讲师将讲授核心项目内容，帮助学生学习和掌握项目领域的基础知识，并酌情教授与学员所需的项目要素相关的其他材料。 </li>
              <li>学生完成产品设计以及顾客演示，导师确保程序测试通过。</li>
            </ul>
            {/* TODO: ADD PARTNER ORGANISATIONS FOR CAPSTONE PROJECT*/}
          </div>
        </div>
      </div>
      {/* 1-1 CLASS */}
      <div
        className={`${
          !oneOpen && 'cursor-pointer'
        } bg-white text-darkGrey p-7 flex md:flex-row flex-col gap-x-20 rounded-2xl relative`}
        onClick={() => setOneOpen(!oneOpen)}
      >
        <span className='absolute top-8 right-12 cursor-pointer'>
          <Image
            src={
              oneOpen ? '/assets/down-arrow.png' : '/assets/right-arrow.png'
            }
            width={24}
            height={24}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 px-2 md:px-16'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans md:text-4xl text-xl font-bold'>
              一对一编程课程
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight pt-3'>
              <span className='text-beginner'>
                一对一的编码课程，更多关注学生自身的要求，导师将以行业顶尖的软件工程(例如亚马逊，微软和谷歌)为模型基础，并根据学生自身的兴趣和需求设计项目。在项目实践中，学生不仅能掌握计算机和编程能力，还可以培养批判性思维、创造力和解决问题的能力。 
              </span>
            </div>
          </div>
          <div className={`flex flex-col gap-y-3 font-dm-sans ${!oneOpen && 'hidden'}`}>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              一对一编程项目流程
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-8 pl-5 leading-[30px]'>
              <li>设计阶段: 学生头脑风暴，与导师共同设计项目。 </li>
              <li>技能阶段: 教师通过理论和实践案例教授编码知识。 </li>
              <li>构建阶段：学生将综合运用所学知识构建个人项目的元素，无论是用户界面、预测模型、数据库集成还是人工智能功能。  </li>
              <li>测试和部署阶段: 学生们将完善代码，确保其功能顺畅，并将项目组件组装成精美、高质量的最终产品。</li>
              <li>发布阶段: 学生可以选择在网站上发布项目详情，分享自己的项目。 </li>
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
            src={
              stanfordAI ? '/assets/down-arrow.png' : '/assets/right-arrow.png'
            }
            width={24}
            height={24}
            alt='arrow'
          />
        </span>
        <div className='flex flex-col gap-y-7 px-2 md:px-16'>
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-dm-sans md:text-4xl text-xl font-bold'>
              斯坦福 AI Playground
            </h3>
            <div className='font-dm-mono md:text-2xl tracking-tight pt-3'>
              <span className='text-beginner'>
                AI Playground 是一个综合性的互动学习平台，让学生无需编写任何代码就能学习、构建和体验 AI。 它是斯坦福大学研究生专门针对高中生开发的学习平台，让学生初步接触人工智能和编码。               </span>
            </div>
          </div>
          <div className={`flex flex-col gap-y-3 font-dm-sans ${!stanfordAI && 'hidden'}`}>
            <h3 className='md:text-2xl font-bold text-bytewiseBlue'>
              课程资料
            </h3>
            <ul className='list-disc font-dm-sans md:text-2xl md:px-8 pl-5 leading-[30px]'>
              <li>一对一或与朋友们组小班一起与我们的导师一起学习。 </li>
              <li>以AI为初步科技的认识，慢慢深入了解编程和其他科技领域 。 </li>
              <li>在 AI Playground 中，机器学习算法和模型的组成部分都以积木的形式呈现。当你展示出对它们的理解后，就能收集到这些积木。  </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mx-7 pt-5'>
        <p className='font-dm-sans md:text-2xl'>
          看不到感兴趣的课程？想了解更多？
        </p>
        <p className='font-dm-sans md:text-2xl'>
          <Link
            className='underline underline-offset-[6px]'
            href={"https://wa.me/85296348923"}
            target='_blank'
          >
            在微信联系我们！
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default CourseCatalog;
