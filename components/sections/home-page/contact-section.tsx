import { cn } from "@/lib/utils";
import React from "react";
import Container from "@/components/ui/container";
import { contactItems } from "@/lib/contact";
import Link from "next/link";
import LinkText from "@/components/ui/link";

interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  link?: {
    display?: string;
    url?: string;
  };
}

const ContactSection: React.FunctionComponent = () => {
  return (
    <Container>
      <header>
        <h2 className="contact-heading  mt-12 leading-snug font-medium text-base ">
          {"Contact."}
        </h2>
        <div className="about-content-wrapper leading-6  font-normal text-secondary-foreground mt-4 mb-8">
          <p>
            {`If my work has sparked your interest or if you have any feedback to share about this website, I'd be happy to exchange ideas.`}
          </p>
        </div>
      </header>
      <main className="project-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-4">
        {contactItems.map((contact, contactIndex) => (
          <ContactItem {...contact} key={contactIndex} />
        ))}
      </main>
    </Container>
  );
};

const ContactItem: React.FunctionComponent<ContactItemProps> = ({
  title,
  link,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        "contact-item grid sm:grid-cols-3 grid-cols-2 items-center justify-start gap-4",
        className
      )}
      {...attr}
    >
      <span className="contact-title font-medium text-sm">{title}</span>
      <span className="contact-link-content">
        {link?.url && (
          <LinkText
            className="text-sm font-normal text-zinc-500"
            href={link?.url}
          >
            {link?.display}
          </LinkText>
        )}
        {!link?.url && (
          <span className="text-sm font-normal text-zinc-500">
            {"link not found"}
          </span>
        )}
      </span>
    </div>
  );
};

export default ContactSection;
export type { ContactItemProps };
