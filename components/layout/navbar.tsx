import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../ui/container";
import ModeToggle from "../ui/toggle-button";
import OnlyClient from "../ui/only-client";

type PathType = "internal" | "external";

interface PathMapProps {
  pathType?: PathType;
  title?: string;
  link?: string;
  isAvailable?: boolean;
}

const navlinks = [
  {
    pathType: "internal",
    title: "Home",
    link: "/",
    isAvailable: true,
  },

  {
    pathType: "internal",
    title: "Blog",
    link: "/blog",
    isAvailable: true,
  },
  {
    pathType: "internal",
    title: "Resume",
    link: "/resume",
    isAvailable: true,
  },

];

const Navbar: React.FunctionComponent = () => {
  return (
    <Container>
      <nav className="navbar mt-12 flex justify-between">
        <ul className="navbar-options-list flex flex-row items-center justify-start -ml-[9px] gap-2">
          {navlinks.map((pathMapItem, pathMapIndex: number) => {
            if (pathMapItem?.isAvailable) {
              return (
                <li
                  className="link-text text-base "
                  key={pathMapIndex}
                >
                  <Link href={pathMapItem?.link}>
                    <Button
                      variant={"link"}
                      className="after:w-full  relative after:absolute after:h-[1px] px-3 dark:after:bg-zinc-300 after:bg-zinc-800 after:bottom-2 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out  hover:after:origin-bottom-left after:origin-bottom-right"
                    >
                      {pathMapItem?.title}
                    </Button>
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  className="navbar-option-item option-item-unavailable cursor-not-allowed text-base text-zinc-400"
                  key={pathMapIndex}
                >
                  {pathMapItem?.title}
                </li>
              );
            }
          })}
        </ul>
        <OnlyClient>
          <ModeToggle />
        </OnlyClient>
      </nav>
    </Container>
  );
};

export default Navbar;
export type { PathMapProps };
