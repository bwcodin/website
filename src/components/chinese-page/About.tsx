import React from "react";

const About = () => {
  return (
    <div className="md:my-24 my-12 md:mx-40 mx-7 flex flex-col gap-y-4">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        关于我们： 
      </h2>
      <h3 className="font-dm-sans md:text-2xl text-base font-bold text-darkGrey">
        Bytewise是香港一家青少年编程教育机构，我们利用编码的力量，让学生掌握在当今社会脱颖而出所需的技能。 
      </h3>
      <p className="font-dm-sans md:text-2xl">
      我们相信编码能培养学生的逻辑思考、批判性思维和解决问题的能力，这些都是学生在学业和社会中取得成功的必备技能。
      </p>
    </div>
  );
};

export default About;
