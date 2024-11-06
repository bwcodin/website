import Glance from "@/components/capstone-projects/Glance";
import Hero from "@/components/capstone-projects/Hero";
import UpcomingProjects from "@/components/capstone-projects/UpcomingProjects";
import SubPageHeader from "@/components/subPageHeader";

const CapstoneProject = () => {
  return (
    <div>
      <SubPageHeader title="Capstone Projects" />
      <Hero />
      <Glance />
      <UpcomingProjects />
    </div>
  );
};

export default CapstoneProject;
