import About from "@/components/chinese-page/About";
import CourseCatalog from "@/components/chinese-page/CourseCatalog";
import InstructorCard from "@/components/chinese-page/InstructorCard";
import Instructors from "@/components/chinese-page/Instructors";
import SubPageHeader from "@/components/subPageHeader";

const ChinesePage = () => {
  return (
    <div>
      <About />
      <CourseCatalog />
      <Instructors />
    </div>
  );
};

export default ChinesePage;