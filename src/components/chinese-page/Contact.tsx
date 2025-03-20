import React from "react";
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="md:my-24 my-12 md:mx-40 mx-7 flex flex-col gap-y-4">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        联系我们： 
      </h2>
      <div className='flex flex-col items-center md:gap-y-12 gap-y-6'>
        <div className='flex items-center md:gap-x-12 gap-x-6'>
          <div className="flex flex-col items-center font-dm-sans md:text-2xl font-bold md:gap-y-8 gap-y-5">
            Wechat QR Code 
            <Image
            src={'/assets/qr_wechat.png'}
            width={280}
            height={280}
            alt='wechat-logo'
          />
          </div>
          <div className="flex flex-col items-center font-dm-sans md:text-2xl font-bold md:gap-y-8 gap-y-5">
            XHS QR Code 
            <Image
            src={'/assets/qr_xhs.png'}
            width={300}
            height={300}
            alt='XHS-logo'
          />
          </div>
        </div>
      </div>
      <p className="font-dm-sans items-center pt-5 md:pt-20 md:text-2xl">
        <strong>WhatsApp：</strong>+852 9634 8923
        <br />
        <strong>邮箱：</strong>info@bytewisecoding.com  
      </p>
    </div>
  );
};

export default Contact;
