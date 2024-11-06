import CourseCatalog from "@/components/courses/CourseCatalog";
import CourseSchedule from "@/components/courses/CourseSchedule";
import SubPageHeader from "@/components/subPageHeader";

const Courses = () => {
  return (
    <div>
      <SubPageHeader title="Courses" />
      <CourseSchedule />
      <CourseCatalog />
    </div>
  );
};

export default Courses;
