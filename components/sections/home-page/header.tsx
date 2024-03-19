import Image from "next/image";
import Container from "@/components/ui/container";

const Header: React.FunctionComponent = () => {
  return (
    <Container className="flex flex-row text-foreground items-center justify-start gap-4 mt-12 max-sm:items-start max-md:items-start">
      <div>
        <h1 className="welcome-text leading-snug font-semibold text-2xl ">
          {"👋 Hi, I am Chandresh"}
        </h1>
        <div className="leading-snug font-normal text-base text-secondary-foreground mt-2">
          <p>
            {"A half frontend software engineer, half designer from India."}
          </p>
          <p>{new Date().getFullYear() - 2003 + ", he/him"}</p>
        </div>
      </div>
    </Container>
  );
};

export default Header;
