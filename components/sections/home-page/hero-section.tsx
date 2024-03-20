import Container from "../../ui/container";

const HeroSection: React.FunctionComponent = () => {
  return (
    <Container>
      <h2 className="about-heading leading-snug mt-6 font-semibold text-base ">
        {"About me."}
      </h2>
      <div className="about-content-wrapper leading-6  font-normal text-secondary-foreground mt-4">
        <p>
          {
            "Crafting UIs with React since 2020. learning how to build and design scalable websites and applications, striving to create great experiences."
          }
        </p>
      </div>
      {/*       <Callout className="mt-4">
        <p>
          {
            "I am currently open for full-time engineering roles, which involves user interface and experience design, frontend engineering as the core."
          }
        </p>
        <p className="mt-2 mb-4">
          {
            "A collaborative team of engineers and designers, who are building great products. Interested in working together? Feel free to schedule a meet!"
          }
        </p>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button onClick={() => window.open("https://cal.com/yashsehgal")}>
            {"Schedule a meet / cal.com"}
          </Button>
          <LinkText
            href={"/resume"}
            className="text-zinc-600 font-medium text-sm"
          >
            {"Resume"}
          </LinkText>
        </div>
      </Callout> */}
    </Container>
  );
};

export default HeroSection;
