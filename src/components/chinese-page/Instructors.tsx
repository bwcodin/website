import React from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const instructors = [
    {
      img: "/instructors/eison_chiang.jpg",
      name: "Eison",
      title: "卡内基梅隆大学",
      subtitle: "斯伦贝谢、3TU 技术公司",
    },
    {
      img: "/instructors/jon_leung.jpg",
      name: "Jon",
      title: "卡内基梅隆大学",
      subtitle: "微软",
    },
    {
      img: "/instructors/alex_guo.jpg",
      name: "Alex",
      title: "哥伦比亚大学、韦尔斯利学院 ",
      subtitle: "麻省理工学院媒体实验室、通用电气",
    },
    {
      img: "/instructors/toby_leung.jpeg",
      name: "Toby",
      title: "康奈尔大学",
      subtitle: "波士顿咨询公司（BCG）",
    },
    {
      img: "/instructors/erica_ho.jpg",
      name: "Erica",
      title: "哥伦比亚大学巴纳德学院",
      subtitle: "福布斯，Datadog",
    },
    {
      img: "/instructors/gio_leong.jpeg",
      name: "Gio",
      title: "塔夫茨大学",
      subtitle: "红帽，Amplify 教育",
    },
    {
      img: "/instructors/brian_so.jpg",
      name: "Brian",
      title: "卡内基梅隆大学",
      subtitle: "HAECO, Gogovan",
    },
    {
      img: "/instructors/obeida_eljundi.jpg",
      name: "Obeida",
      title: "贝鲁特美国大学",
      subtitle: "斯伦贝谢, 贝鲁特人工智能公司",
    },
    {
      img: "/instructors/nicholas_koo.jpg",
      name: "Nick",
      title: "萨凡纳艺术与设计学院",
      subtitle: "无限生活工作室",
    },
    {
      img: "/instructors/louis_kwong.jpg",
      name: "Louis",
      title: "香港大学",
      subtitle: "SLR实验室",
    },
    {
      img: "/instructors/mark_lam.jpg",
      name: "Mark",
      title: "剑桥大学",
      subtitle: "博士研究生",
    },
  ];
  return (
    <div className="flex flex-col md:my-24 my-12 md:mx-40 mx-7 gap-y-7">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        我们的导师们
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor.name}
            img={instructor.img}
            name={instructor.name}
            title={instructor.title}
            subtitle={instructor.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
