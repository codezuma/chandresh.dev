import Container from "@/components/ui/container";
import { CustomMDX } from "@/components/ui/mdx";
import resumeContent from "./resume";

const ResumePage = async () => {

       return (
              <Container>
                     <h2 className="about-heading leading-snug mt-6 font-semibold text-base ">
                            {"Resume."}
                     </h2>
                     <CustomMDX content={resumeContent} />
              </Container>
       );

}

export default ResumePage;

