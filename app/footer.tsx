import Container from "@/components/ui/container";
import { Fragment } from "react";

const links = [
  {
    href: "https://nextjs.org",
    label: "Next.js",
  },
  {
    href: "https://mdxjs.com",
    label: "MDX",
  },
  {
    href: "https://tailwindcss.com",
    label: "Tailwind",
  },
  {
    href: "https://vercel.com",
    label: "Vercel",
  },
];

export const Footer = () => {
  return (
    <Container className="mt-12 pb-8 text-base">
      <p className="mt-8">
        Built with{" "}
        {links.map((link, index) => (
          <Fragment key={index}>
            {index === links.length - 1 && "and "}
            <a
              key={index}
              href={link.href}
              className="text-foreground hover:text-secondary-foreground"
            >
              {link.label}
            </a>
            {index < links.length - 1 && ", "}
          </Fragment>
        ))}
        .
      </p>
    </Container>
  );
};
