import React from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const instructors = [
    {
      img: "/instructors/eison_chiang.jpg",
      name: "Eison",
      title: "Carnegie Mellon University",
      subtitle: "Schlumberger, 3TU Technologies",
    },
    {
      img: "/instructors/jon_leung.jpg",
      name: "Jon",
      title: "Carnegie Mellon University",
      subtitle: "Microsoft",
    },
    {
      img: "/instructors/alex_guo.jpg",
      name: "Alex",
      title: "Columbia University, Wellesley College",
      subtitle: "MIT Media Lab, General Electric",
    },
    {
      img: "/instructors/toby_leung.jpeg",
      name: "Toby",
      title: "Cornell University",
      subtitle: "Boston Consulting Group (BCG)",
    },
    {
      img: "/instructors/erica_ho.jpg",
      name: "Erica",
      title: "Columbia University, Barnard College",
      subtitle: "Forbes, Datadog",
    },
    {
      img: "/instructors/gio_leong.jpeg",
      name: "Gio",
      title: "Tufts University",
      subtitle: "Red Hat, Amplify Education",
    },
    {
      img: "/instructors/brian_so.jpg",
      name: "Brian",
      title: "Carnegie Mellon University",
      subtitle: "HAECO, Gogovan",
    },
    {
      img: "/instructors/obeida_eljundi.jpg",
      name: "Obeida",
      title: "American University of Beirut",
      subtitle: "Schmlumberger, Beriut AI",
    },
    {
      img: "/instructors/nicholas_koo.jpg",
      name: "Nick",
      title: "Savannah College of Art and Design",
      subtitle: "Infinite Life Studio",
    },
    {
      img: "/instructors/louis_kwong.jpg",
      name: "Louis",
      title: "University of Hong Kong",
      subtitle: "SLR Lab",
    },
    {
      img: "/instructors/mark_lam.jpg",
      name: "Mark",
      title: "University of Cambridge",
      subtitle: "TPG",
    },
  ];
  return (
    <div className="flex flex-col md:my-24 my-12 md:mx-40 mx-7 gap-y-7">
      <h2 className="font-dm-sans md:text-4xl text-xl font-bold text-bytewiseBlue">
        Our Instructors
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
